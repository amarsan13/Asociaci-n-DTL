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
        <div style="border:thin;border:2px solid black;border-radius:10px;border-color:#4B4B4B;padding:30px;background-color:#E9E9E9">
        <div>
          <a href="https://mega.nz/file/cWN0XTrD#tguPI2SfdA09VsyoVITNMjVp1xHJQn6nnP-We7ipVXQ" style="display:inline-block;background:#FFD14C;color:black;font-family:Helvetica;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"><b>Ver Estatutos</b></a>
          <a href="https://t.me/+7XRSUgEwbkFjZDY0" style="display:inline-block;background:#FFD14C;color:black;font-family:Helvetica;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"><b>Unirme al grupo de Telegram</b></a>
        </div>
      </div>
      <div style="border:thin;border:2px solid black;border-radius:10px;border-color:#4B4B4B;padding:30px;background-color:#E9E9E9">
        <div>
          <a href="https://p.berrly.com/ASODTL/registration/2594?lang=es" style="display:inline-block;background:#FFD14C;color:black;font-family:Helvetica;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"><b>Ir al formulario de inscripción</b></a>
          <a href="https://vimeo.com/717051965" style="display:inline-block;background:#FFD14C;color:black;font-family:Helvetica;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"><b>Ver vídeo explicativo de la zona privada de socios</b></a>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  )
}
