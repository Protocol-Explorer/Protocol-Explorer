import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    p: ({ children }) => <p style={{ fontSize: '1.5rem', marginBottom:'15px', maxWidth: '700px' }}>{children}</p>,
    ...components,
  }
}