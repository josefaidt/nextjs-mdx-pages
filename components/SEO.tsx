import Head from 'next/head'
import type { PropsWithChildren } from 'react'

export type SEOProps = PropsWithChildren<{
  title: string
  description?: string
  image?: string
}>

function SEO({ title, description, image }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@josefaidt" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default SEO
