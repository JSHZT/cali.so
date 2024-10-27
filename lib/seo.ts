export const seo = {
  title: 'JSHZT | 开发者、设计师、细节控、创始人',
  description:
    '我是JSHZT，是一名开发者，人工智能研究者，热爱科研与生活，期待与你共同进步',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://tonpig.top'
      : 'http://localhost:3000'
  ),
} as const
