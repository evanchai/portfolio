export interface Project {
  name: string
  slug: string
  url: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'aime',
    slug: 'aime',
    url: 'https://aime.ning.codes',
    image: '/images/aime.svg'
  },
  {
    name: 'Plat',
    slug: 'plat',
    url: 'https://plat.ning.codes',
    image: '/images/plat.svg'
  },
  {
    name: 'Museo',
    slug: 'museo',
    url: 'https://museo.ning.codes',
    image: '/images/museo.svg'
  },
  {
    name: 'Logos',
    slug: 'logos',
    url: 'https://logos.ning.codes',
    image: '/images/logos.svg'
  },
  {
    name: 'MechKeys',
    slug: 'poker',
    url: 'https://poker.ning.codes',
    image: '/images/poker.svg'
  },
  {
    name: 'Airwave',
    slug: 'airwave',
    url: 'https://airwave.ning.codes',
    image: '/images/airwave.svg'
  },
  {
    name: 'Tunes',
    slug: 'tunes',
    url: 'https://tunes.ning.codes',
    image: '/images/tunes.svg'
  }
]

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/ningchai/',
  email: 'evanchai@outlook.com'
}

export interface Thought {
  date: string
  text: string
  tags: string[]
}

export const thoughts: Thought[] = [
  {
    date: 'Feb 2025',
    text: 'RAG is overkill for style cloning — the system prompt IS the model',
    tags: ['ai', 'aime']
  },
  {
    date: 'Feb 2025',
    text: 'Vibe coding changes who can build software. The bottleneck shifts from "can you code" to "can you describe what you want"',
    tags: ['vibecoding']
  },
  {
    date: 'Jan 2025',
    text: 'The best AI products feel like tools, not magic',
    tags: ['product']
  }
]
