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
          <a href="https://mega.nz/file/cWN0XTrD#tguPI2SfdA09VsyoVITNMjVp1xHJQn6nnP-We7ipVXQ"><b>Ver Estatutos</b></a>
          <a href="https://t.me/+7XRSUgEwbkFjZDY0"><b>Unirme al grupo de Telegram</b></a>
          <a href="https://p.berrly.com/ASODTL/registration/2594?lang=es"><b>Ir al formulario de inscripción</b></a>
          <a href="https://vimeo.com/717051965"><b>Ver vídeo explicativo de la zona privada de socios</b></a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
