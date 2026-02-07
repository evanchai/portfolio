# Ning's Vibe Coding Portfolio

个人主页项目，展示所有 Vibe Coding 作品。

## 🎯 项目简介

这是一个极简风格的个人作品集网站，展示我的 AI 驱动项目：

- **Plat** - AI 菜单翻译应用
- **Museo** - AI 艺术博物馆助手
- **MechKeys Soundboard** - 机械键盘音效板

## 🛠️ 技术栈

- React 19
- TypeScript
- Vite
- CSS3 (现代化设计)
- Lucide Icons

## 🚀 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
portfolio/
├── src/
│   ├── components/         # React 组件
│   │   ├── Header.tsx     # 页头，个人介绍
│   │   ├── ProjectCard.tsx # 项目卡片
│   │   └── Footer.tsx     # 页脚
│   ├── data/
│   │   └── projects.ts    # 项目数据配置
│   ├── App.tsx            # 主应用组件
│   ├── App.css            # 全局样式
│   ├── main.tsx           # 入口文件
│   └── index.css          # 基础样式
├── public/                # 静态资源
├── index.html             # HTML 模板
├── vite.config.ts         # Vite 配置
└── package.json           # 依赖配置
```

## 🎨 设计特点

- **深色主题** - 现代感十足的暗黑风格
- **渐变效果** - 标题和卡片使用渐变色
- **悬停动画** - 流畅的交互反馈
- **响应式设计** - 完美适配移动端和桌面端
- **极简布局** - 聚焦内容，减少干扰

## 🔧 自定义配置

### 修改项目信息

编辑 [src/data/projects.ts](src/data/projects.ts)：

```typescript
export const projects: Project[] = [
  {
    name: 'Your Project',
    slug: 'project-slug',
    description: 'Project description',
    descriptionCN: '项目描述',
    url: '/path-to-project',
    tech: ['React', 'TypeScript'],
    color: '#FF6B6B',
    emoji: '🚀'
  }
]
```

### 修改社交链接

在 [src/data/projects.ts](src/data/projects.ts) 中：

```typescript
export const socialLinks = {
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com'
}
```

### 修改样式

全局样式在 [src/App.css](src/App.css) 中定义，包括：

- 颜色主题（`:root` 变量）
- 组件样式
- 动画效果

## 📦 部署

### 部署到 Vercel

1. 安装 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 部署：
   ```bash
   vercel
   ```

3. 生产部署：
   ```bash
   vercel --prod
   ```

### 配置自定义域名

参考 [DEPLOYMENT.md](../DEPLOYMENT.md) 获取详细的部署和域名配置指南。

## 🌐 访问地址

- **开发环境**: http://localhost:5173
- **生产环境**: https://ning.codes

## 📝 更新日志

### v1.0.0 (2026-02-07)

- ✨ 初始版本发布
- 🎨 实现深色主题设计
- 📱 响应式布局
- 🔗 集成三个子项目链接

## 📄 许可证

© 2026 Ning. All rights reserved.

---

**Built with ❤️ using React + TypeScript + Vite**
