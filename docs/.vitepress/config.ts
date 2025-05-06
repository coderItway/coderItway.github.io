import { defineConfig } from 'vitepress'
import { metaData } from './config/constants'
import { head } from './config/head'
import { markdown } from './config/markdown'
import { themeConfig } from './config/theme'


export default defineConfig({
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    base:"/vitepress-blog/",
    cleanUrls: 'without-subfolders',
    lastUpdated: true, // 显示最后更新时间

    head, // <head>内标签配置
    markdown: markdown, // Markdown配置
    themeConfig // 主题配置
  })
