import MDXProvider from '../components/MDXProvider'

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
