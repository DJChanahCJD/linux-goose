import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 配置 `pageExtensions` 以包含 Markdown 和 MDX 文件
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // 配置以处理 .md 和 .mdx 文件
  extension: /\.(md|mdx)$/,
  // 添加 markdown 插件
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

// 将 MDX 配置与 Next.js 配置合并
export default withMDX(nextConfig)