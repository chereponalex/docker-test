import Mapsvg from "./mapsvg"
import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function MapComponent({ helpPopupOpened, handleOpenPopup }) {
  const [mobile, setMobile] = useState(false)
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  useEffect(() => {
    // без этой проверки при перезагрузке на мобильном иногда
    // подгружается изображение не для мобильного
    if (isMobile) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [isMobile])

  const MapLegend = () => {
    return (
      <div className="legend-and-help">
        <div className="legend">
          <div className="legend__item">
            <img
              src="./images/chosen-tab__images/blue-circle.svg"
              className="legend__color"
              alt="Особые регионы"
            />
            <p className="legend__text">Особые</p>
          </div>
          <div className="legend__item">
            <img
              src="./images/chosen-tab__images/orange-circle.svg"
              className="legend__color"
              alt="Известные регионы"
            />
            <p className="legend__text">Известные</p>
          </div>
          <div className="legend__item">
            <img
              src="./images/chosen-tab__images/green-circle.svg"
              className="legend__color"
              alt="Скромные регионы"
            />
            <p className="legend__text">Скромные </p>
          </div>
          <div className="legend__item">
            <img
              src="./images/chosen-tab__images/red-circle.svg"
              className="legend__color"
              alt="Малозаметные регионы"
            />
            <p className="legend__text">Малозаметные </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div
        style={{
          //height: 800,
          //display: "flex",
          flexDirection: "column",
          marginTop: 0,
          marginBottom: 80,
          position: "relative",
        }}
        className="map__container"
      >
        <div
          className={`help__overlay ${
            helpPopupOpened ? "" : "help__overlay_hidden"
          }`}
          onClick={handleOpenPopup}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <img
            className="help__popup-image"
            src={`./images/MapArea${mobile ? "-mobile" : ""}.svg`}
            alt="Как читать информацию о регионе"
          />
        </div>

        <Mapsvg />
        <MapLegend />
      </div>
    </>
  )
}
