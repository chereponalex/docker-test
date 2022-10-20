import RatingBlock from "../components/ratingBlock"
import Head from "next/head"
import ButtonComponent from "@/components/ButtonComponent"

const RatingAttractiveness = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <title>Рейтинги привлекательности</title>
        <meta
          name="description"
          content="Рейтинги привлекательности регионов России по 6 направлениям"
        />
        <meta property="og:title" content="Рейтинги привлекательности" />
        <meta
          property="og:description"
          content="Рейтинги привлекательности регионов России по 6 направлениям"
        />
        <meta
          property="og:url"
          content="https://tourism-index.strelka-kb.com/ratingattractiveness"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <article className="useful">
        <h1 className="calculated__title">Рейтинги Привлекательности</h1>
        <div
          style={{ background: "#F8F8F8", margin: 0, padding: 0, zIndex: 0 }}
        >
          <RatingBlock category="intangible" show="all" />
        </div>
        <ButtonComponent />
      </article>
    </>
  )
}

export default RatingAttractiveness
