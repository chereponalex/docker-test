import Link from "next/link"
import UsefulInfoComponent from "@/components/UsefulInfoComponent"
import ButtonComponent from "@/components/ButtonComponent"
import Head from "next/head"

const HowUsefull = () => (
  <article className="useful">
    <Head>
      <title>Чем полезен индекс?</title>
      <meta
        name="description"
        content="Индекс позволяет понять, как наиболее эффективно вложить ресурсы в развитие туристического продукта регионов России, уточнить и скорректировать решения по развитию туризма."
      />
      <meta property="og:title" content="Чем полезен индекс?" />
      <meta
        property="og:description"
        content="Индекс позволяет понять, как наиболее эффективно вложить ресурсы в развитие туристического продукта регионов России, уточнить и скорректировать решения по развитию туризма."
      />
      <meta
        property="og:url"
        content="https://tourism-index.strelka-kb.com/howusefull"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <h1 className="calculated__title">Чем полезен индекс?</h1>
    <p className="calculated__text">
      Индекс позволяет понять, как наиболее эффективно вложить ресурсы в
      развитие туристического продукта регионов России, уточнить и
      скорректировать решения по развитию туризма, в том числе:
    </p>
    <UsefulInfoComponent />
    <ButtonComponent />
  </article>
)

export default HowUsefull
