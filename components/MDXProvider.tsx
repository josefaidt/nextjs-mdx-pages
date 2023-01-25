import Layout from './Layout'
import { MDXProvider as StockMDXProvider } from '@mdx-js/react'
import type { PropsWithChildren } from 'react'

const wrapper = ({ children, frontmatter }) => {
  console.log('mdx page props', { props: { frontmatter } })
  return <Layout frontmatter={frontmatter}>{children}</Layout>
}

const shortcodes = {
  wrapper,
}

type MDXProviderProps = PropsWithChildren<{}>

function MDXProvider({ children }: MDXProviderProps) {
  return <StockMDXProvider components={shortcodes}>{children}</StockMDXProvider>
}

export default MDXProvider
