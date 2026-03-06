# Portfolio — 个人主页

ning.codes 根域名的个人着陆页。

## Tech Stack

- React 19 + TypeScript + Vite（纯 CSS）
- Google Gemini AI（`@google/generative-ai`）
- Upstash Redis
- Sentry + Vercel Analytics

## 常用命令

```bash
npm run dev     # Vite dev server
npm run build   # vite build
```

## 项目结构

- `api/thoughts.ts` — 动态内容 API（maxDuration: 30s）
- 安全头配置最完整（CSP、HSTS、Referrer-Policy、Permissions-Policy）

## 注意事项

- 这是主域名部署，其他子项目通过子域名访问
- 2026-03-01 曾发生 `.env.vercel` 泄露事故，详见根目录 CLAUDE.md 安全规范
