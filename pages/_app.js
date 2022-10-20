import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import "../index.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(72433924, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
              });`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/72178255"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <meta
          property="og:image"
          content="https://tourism-index.strelka-kb.com/images/Thumbnail.jpg"
        />
        <meta
          property="twitter:image"
          content="https://tourism-index.strelka-kb.com/images/Thumbnail.jpg"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
