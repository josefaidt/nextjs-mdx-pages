import nextMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import recmaMdxFrontmatter from './plugins/recma-mdx-frontmatter.mjs'

const withMDX = nextMDX({
  extension: /\.mdx$/,
  jsx: true,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'frontmatter' }],
      remarkGfm,
    ],
    recmaPlugins: [[recmaMdxFrontmatter, { name: 'frontmatter' }]],
    providerImportSource: '@mdx-js/react',
  },
})

/**
 * @type {import('next').NextConfig}
 */
const config = {
  pageExtensions: ['mdx', 'tsx'],
}

export default withMDX(config)
