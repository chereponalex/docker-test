import Head from "next/head"
import MainHeader from "@/components/MainHeader"
import MainPage from "@/components/MainPage"
import React from "react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Индекс туристической привлекательности регионов россии</title>
        <meta name="description" content="Главная страница" />
        <meta
          property="og:title"
          content="Индекс туристической привлекательности регионов России"
        />
        <meta
          property="og:description"
          content="Что волнует россиян на отдыхе и как регионы могут привлечь новых туристов"
        />
        <meta
          property="og:url"
          content="https://tourism-index.strelka-kb.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="text/javascript"
          src="https://vk.com/js/api/share.js?95"
          charset="windows-1251"
        />
      </Head>
      <MainHeader />
      <MainPage />
    </>
  )
}
