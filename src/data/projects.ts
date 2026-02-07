export interface Project {
  name: string
  slug: string
  description: string
  descriptionCN: string
  url: string
  tech: string[]
  color: string
  emoji: string
}

export const projects: Project[] = [
  {
    name: 'Plat',
    slug: 'plat',
    description: 'AI-powered menu translation app',
    descriptionCN: 'AI 菜单翻译应用 - 将外文菜单转换为双语数字格式',
    url: '/plat',
    tech: ['React', 'TypeScript', 'Gemini AI', 'Firebase'],
    color: '#FF6B6B',
    emoji: '🍽️'
  },
  {
    name: 'Museo',
    slug: 'museo',
    description: 'AI Art Companion',
    descriptionCN: 'AI 艺术博物馆助手 - 智能解析艺术品',
    url: '/museo',
    tech: ['React', 'TypeScript', 'Gemini AI', 'Firebase'],
    color: '#4ECDC4',
    emoji: '🎨'
  },
  {
    name: 'MechKeys Soundboard',
    slug: 'poker',
    description: '4-key soundboard with mechanical keyboard feel',
    descriptionCN: '机械键盘音效板 - 自定义声音的触感体验',
    url: '/poker',
    tech: ['React', 'TypeScript', 'Web Audio API'],
    color: '#95E1D3',
    emoji: '⌨️'
  }
]

export const socialLinks = {
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com'
}
