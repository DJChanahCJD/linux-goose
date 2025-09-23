import type { MDXComponents } from "mdx/types";

/**
 * 全局 MDX 组件配置
 * 使用自定义CSS变量风格
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 标题
    h1: ({ children, ...props }) => (
      <h1 {...props} className="text-3xl font-bold mb-6 text-primary mt-0">
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 {...props} className="text-2xl font-semibold mb-4 text-primary mt-8">
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 {...props} className="text-xl font-medium mb-3 text-primary mt-6">
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 {...props} className="text-lg font-semibold mt-6 mb-2 text-foreground">
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5 {...props} className="text-base font-semibold mt-4 mb-2 text-foreground">
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6 {...props} className="text-sm font-semibold mt-4 mb-2 text-muted-foreground">
        {children}
      </h6>
    ),

    // 段落
    p: ({ children, ...props }) => (
      <p {...props} className="mb-4 leading-relaxed text-foreground">
        {children}
      </p>
    ),

    // 列表
    ul: ({ children, ...props }) => (
      <ul {...props} className="list-disc pl-6 mb-4 space-y-2 text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol {...props} className="list-decimal pl-6 mb-4 space-y-2 text-foreground">
        {children}
      </ol>
    ),

    // 引用块
    blockquote: ({ children, ...props }) => (
      <blockquote
        {...props}
        className="border-l-4 border-muted pl-4 my-4 text-muted-foreground italic"
      >
        {children}
      </blockquote>
    ),

    code: ({ children, className, ...props }) => {
      // 检查是否是代码块（有language-类或包含换行符）
      const isBlock = className?.includes('language-') || 
                    (typeof children === 'string' && children.includes('\n'));
      
      // 提取语言名称
      const language = className?.replace('language-', '') || 'text';
      
      return isBlock ? (
        <div className="relative my-4">
          <div className="absolute top-1 right-2 text-primary text-xs rounded-t-md">
            {language}
          </div>
          <code
            {...props}
            className="block bg-secondary p-3 rounded-md text-sm font-mono overflow-x-auto text-foreground"
          >
            {children}
          </code>
        </div>
      ) : (
        <code
          {...props}
          className="bg-secondary px-1 py-0.5 rounded text-sm font-mono text-foreground"
        >
          {children}
        </code>
      );
    },
    
    // 粗体
    strong: ({ children, ...props }) => (
      <strong {...props} className="font-semibold text-foreground">
        {children}
      </strong>
    ),

    // 图片
    img: ({ ...props }) => (
      <img {...props} className="max-w-full h-auto rounded-md my-4 border border-border" />
    ),

    // 表格
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          {...props}
          className="w-full border border-border border-collapse text-sm"
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        {...props}
        className="border border-border bg-accent px-3 py-2 text-left font-semibold text-foreground"
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td {...props} className="border border-border px-3 py-2 align-top text-foreground">
        {children}
      </td>
    ),
  };
}