import type { MDXComponents } from 'mdx/types'

/**
 * 全局MDX组件配置
 * 用于在App Router中使用@next/mdx
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1
        {...props}
        className="text-3xl font-bold mb-6 text-primary mt-0"
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        {...props}
        className="text-2xl font-semibold mb-4 text-primary mt-8"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="text-xl font-medium mb-3 text-primary mt-6"
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        {...props}
        className="text-lg font-medium mb-2 text-primary mt-4"
      >
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5
        {...props}
        className="text-base font-medium mb-2 text-primary mt-4"
      >
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6
        {...props}
        className="text-sm font-medium mb-2 text-primary mt-4"
      >
        {children}
      </h6>
    ),
    // 为列表添加样式
    ul: ({ children, ...props }) => (
      <ul {...props} className="list-disc pl-6 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol {...props} className="list-decimal pl-6 space-y-2">
        {children}
      </ol>
    ),
    // 为段落添加样式
    p: ({ children, ...props }) => (
      <p {...props} className="mb-4 leading-relaxed">
        {children}
      </p>
    ),
    // 为代码块添加样式
    code: ({ children, ...props }) => (
      <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // 为加粗文本添加样式
    strong: ({ children, ...props }) => (
      <strong {...props} className="font-bold text-foreground">
        {children}
      </strong>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote {...props} className="border-l-4 border-primary pl-4 my-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    img: ({ children, ...props }) => (
      <img {...props} className="w-full h-auto rounded-md" />
    ),
    inlineCode: ({ children, ...props }) => (
      <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  }
}