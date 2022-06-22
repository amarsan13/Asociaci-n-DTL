import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenid@s a la página temporal de Asociación DTL" />
        <p className="description">
          Si estás interesad@ en asociarte, pero antes te gustaría informarte más, os dejamos algunos enlaces de interés.
        </p>
      </main>

      <Footer />
    </div>
  )
}
