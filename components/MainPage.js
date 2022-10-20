import BrandPowerTab from "@/components/BrandPowerTab"
import MapComponent from "@/components/MapComponent"
import MainFactors from "@/components/MainFactors"
import AboutIndex from "@/components/AboutIndex"
import MainComparison from "@/components/MainComparison"
import MainTeam from "@/components/MainTeam"
import React, { useState } from "react"
import RegionSearchComponent from "@/components/RegionSearchComponent"
import RegionPortraitComponent from "@/components/RegionPortrait"

export default function MainPage() {
  const [helpPopupOpened, setHelpPopupOpened] = useState(false)
  const [mapViewEnabled, setMapViewEnabled] = useState(true)

  const handleOpenPopup = () => {
    setHelpPopupOpened(!helpPopupOpened)
  }

  const handleMapView = () => {
    setMapViewEnabled(true)
    ym(72433924, "reachGoal", "mapViewChange", { mapView: "map" })
  }

  const handleRegionsView = () => {
    setMapViewEnabled(false)
    ym(72433924, "reachGoal", "mapViewChange", { mapView: "table" })
  }

  return (
    <>
      <main className="main">
        <h2 className="main__title">Образ регионов в социальных медиа</h2>
        <section className="main__texts">
          <p className="main__text">
            В период пандемии значительно выросла популярность внутреннего
            туризма. За прошедший год многие открыли для себя
            достопримечательности России, а государство еще активнее взялось за
            развитие отрасли: к лету планируется принять новый национальный
            проект «Туризм и индустрия гостеприимства». Его главные темы —
            создание качественных туристических продуктов и рост показателей
            развития отрасли вдвое к 2030 году.
            <br />
            <br />
            Главный показатель эффективности туризма как сферы услуг —
            удовлетворенность туристов. Чтобы добиться целей, обозначенных в
            нацпроекте, необходимо заинтересовать россиян путешествиями по
            стране. Для этого нужно прислушаться к запросам туристов и
            предложить туристический продукт, соответствующий их ожиданиям.
            <br />
            <br />
            Индекс туристической привлекательности основан на впечатлениях
            россиян. С помощью искусственного интеллекта мы проанализировали
            более 6 миллионов текстов о посещении 82 регионов страны и
            проследили взаимосвязь между содержанием публикаций, объемом
            турпотока и качеством туристической инфраструктуры.
            <br />
            <br />
            Индекс туристической привлекательности поможет сделать еще один шаг
            к созданию и продвижению уникальных туристических продуктов регионов
            России.
          </p>
        </section>
        <h2 className="main__title">
          Результаты оценки туристической привлекательности
        </h2>
        <section className="main__texts">
          <p className="main__text">
            Для расчета Индекса исследователи КБ Стрелка проанализировали
            социальные сети, блоги, форумы и сайты-агрегаторы отзывов, после
            чего подсчитали количество пользовательских текстов, посвященных
            каждому из регионов России и связанных с туризмом. Среди них выявили
            позитивные и негативные комментарии. Для каждого региона был
            составлен индивидуальный портрет — в нем отражены сильные и слабые
            стороны регионального туристического продукта по мнению туристов.
          </p>
        </section>
      </main>
      <section className="main__dark-part">
        <BrandPowerTab />
        <RegionPortraitComponent />
        <div className={"regions__buttons-container"}>
          <button
            className={`regions__button ${
              mapViewEnabled ? `regions__button_active` : ``
            }`}
            onClick={handleMapView}
          >
            Карта
          </button>
          <button
            className={`regions__button ${
              !mapViewEnabled ? `regions__button_active` : ``
            }`}
            onClick={handleRegionsView}
          >
            Таблица
          </button>
        </div>

        {mapViewEnabled ? (
          <MapComponent
            handleOpenPopup={handleOpenPopup}
            helpPopupOpened={helpPopupOpened}
          />
        ) : (
          <RegionSearchComponent />
        )}
        <MainFactors />
        <AboutIndex />
        <MainComparison />
        <MainTeam />
      </section>
    </>
  )
}
