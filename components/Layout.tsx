import SEO from './SEO'
import type { PropsWithChildren } from 'react'
import type { SEOProps } from './SEO'

type LayoutProps = PropsWithChildren<{
  frontmatter: SEOProps
}>

function Layout({ children, frontmatter }: LayoutProps) {
  return (
    <>
      <SEO {...frontmatter}></SEO>
      <main>{children}</main>
    </>
  )
}

export default Layout
