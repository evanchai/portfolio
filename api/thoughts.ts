import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Redis } from "@upstash/redis";
import { GoogleGenerativeAI } from "@google/generative-ai";

let redis: Redis | null = null;

function getRedis() {
  if (!redis) {
    redis = new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    });
  }
  return redis;
}

function checkAuth(req: VercelRequest): boolean {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) return false;
  return auth.slice(7) === process.env.THOUGHTS_PASSWORD;
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

async function translateToEnglish(chineseText: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY not set, skipping translation");
    return chineseText;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { maxOutputTokens: 256, temperature: 0.3 },
    });
    const result = await model.generateContent(
      `Translate the following Chinese text to English. Return ONLY the English translation, nothing else. Keep it natural and concise.\n\n${chineseText}`
    );
    const translation = result.response.text().trim();
    return translation || chineseText;
  } catch (err) {
    console.error("Translation error:", err);
    return chineseText;
  }
}

interface Thought {
  id: string;
  date: string;
  text: string;
  tags: string[];
  createdAt: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  const db = getRedis();

  // GET — list all thoughts
  if (req.method === "GET") {
    const keys = await db.keys("thought:*");
    if (keys.length === 0) return res.json([]);

    const pipeline = db.pipeline();
    for (const key of keys) pipeline.get(key);
    const results = await pipeline.exec<Thought[]>();

    const thoughts = results
      .filter(Boolean)
      .sort((a, b) => b.createdAt - a.createdAt);

    return res.json(thoughts);
  }

  // POST — create thought
  if (req.method === "POST") {
    if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });

    const { text, tags } = req.body;
    if (!text) return res.status(400).json({ error: "text is required" });

    // Auto-translate if no English translation provided (no double newline)
    let finalText = text;
    if (!text.includes("\n\n")) {
      const translation = await translateToEnglish(text);
      if (translation !== text) {
        finalText = `${text}\n\n${translation}`;
      }
    }

    const now = Date.now();
    const id = `thought:${now}:${Math.random().toString(36).slice(2, 8)}`;
    const thought: Thought = {
      id,
      date: formatDate(now),
      text: finalText,
      tags: tags || [],
      createdAt: now,
    };

    await db.set(id, thought);
    return res.status(201).json(thought);
  }

  // DELETE — remove thought
  if (req.method === "DELETE") {
    if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "id is required" });

    await db.del(id);
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
