import Head from "next/head"

import Mapsvg from '../components/mapsvg'

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
      </Head>
      <article className="useful">
        <h1 className="calculated__title">Карта</h1>
        <div style={{ background: "#F8F8F8", margin: 0, padding: 0 }}>
          <Mapsvg />
        </div>
      </article>
    </>
  )
}

export default RatingAttractiveness