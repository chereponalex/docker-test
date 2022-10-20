import React from "react"
import MapImageLoading from "@/components/MapImageLoading"
import html2canvas from "html2canvas"

const MapPopup = ({
  id,
  name,
  total,
  pos,
  neg,
  power,
  effect,
  tourism,
  close,
  parent,
  show,
  helpPopupOpened,
  handleOpenPopup,
}) => {
  const brandPowerList = [
    { name: "Особый", color: "blue" },
    { name: "Известный", color: "orange" },
    { name: "Скромный", color: "green" },
    { name: "Малозаметный", color: "red" },
  ]

  const brandEffectList = [
    { name: "Лидеры туриндустрии", color: "blue" },
    { name: "Медийные зоны", color: "green" },
    { name: "Будущие лидеры", color: "orange" },
    { name: "Аутсайдеры", color: "red" },
  ]

  if (show) {
    return (
      <div
        className={"map-popup"}
        onClick={(evt) => {
          if (evt.target.classList.contains("map-popup")) {
            close(parent)
          }
        }}
      >
        <div id="fb-root" />
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v10.0"
          nonce="GjuefPlu"
        />
        <div className={"map-popup__container"}>
          <div className={"map-popup__header"}>
            <div className={"map-popup__header-container"}>
              <h3 className={"map-popup__title"}>{name}</h3>
              <button
                className="map-popup__close"
                onClick={() => close(parent)}
              />
            </div>
            <div className={"map-popup__header-info"}>
              <div className={"map-popup__character"}>
                <img
                  className={"map-popup__character-icon"}
                  alt={"Характер образа"}
                  src={"./images/map-popup/icons/char.svg"}
                />
                <p className={"map-popup__character-text"}>Характер образа</p>
                <p
                  className={
                    "map-popup__character-power map-popup__character-power_" +
                    brandPowerList[power - 1].color
                  }
                >
                  {brandPowerList[power - 1].name}
                </p>
              </div>
              <div className={"map-popup__count"}>
                <p className={"map-popup__count-accented"}>{tourism} тыс.</p>
                <p className={"map-popup__count-text"}>
                  туристов было размещено в гостиницах в 2019 г.
                </p>
              </div>
            </div>
          </div>
          <div className={"map-popup__info"}>
            <div className={"map-popup__total-container"}>
              <div className={"map-popup__total"}>
                <img
                  src={"./images/map-popup/icons/r-1.svg"}
                  alt={"Общее количество текстов"}
                  className={"map-popup__decorative"}
                />
                <div className={"map-popup__texts"}>
                  <p className={"map-popup__info-accented"}>{total}</p>
                  <p className={"map-popup__info-text"}>
                    Общее количество текстов
                  </p>
                </div>
              </div>
            </div>
            <div className={"map-popup__info-parts"}>
              <div className={"map-popup__part"}>
                <img
                  src={"./images/map-popup/icons/r-2.svg"}
                  alt={"Доля негативных текстов"}
                  className={"map-popup__decorative"}
                />
                <div className={"map-popup__texts"}>
                  <p className={"map-popup__info-accented"}>
                    {Math.round(neg * 100)}%
                  </p>
                  <p className={"map-popup__info-text"}>
                    Доля негативных текстов
                  </p>
                </div>
              </div>
              <div className={"map-popup__part"}>
                <img
                  src={"./images/map-popup/icons/r-3.svg"}
                  alt={"Доля позитивных текстов"}
                  className={"map-popup__decorative"}
                />
                <div className={"map-popup__texts"}>
                  <p className={"map-popup__info-accented"}>
                    {Math.round(pos * 100)}%
                  </p>
                  <p className={"map-popup__info-text"}>
                    Доля позитивных текстов
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MapImageLoading id={id} handleOpenPopup={handleOpenPopup} />
          <div className={"map-popup__legend-and-share"}>
            <div className={"map-popup__legend"}>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/events-icon.svg"
                  alt="События"
                />
                <p className={"map-popup__legend-text"}>События</p>
              </div>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/unmaterial-heritage-icon.svg"
                  alt="Нематериальное наследие"
                />
                <p className={"map-popup__legend-text"}>
                  Нематериальное наследие
                </p>
              </div>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/nature-icon.svg"
                  alt="Природа"
                />
                <p className={"map-popup__legend-text"}>Природа</p>
              </div>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/tourism-icon.svg"
                  alt="Инфраструктура"
                />
                <p className={"map-popup__legend-text"}>Инфраструктура</p>
              </div>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/heritage-icon.svg"
                  alt="Материальное наследие"
                />
                <p className={"map-popup__legend-text"}>
                  Материальное наследие
                </p>
              </div>
              <div className={"map-popup__legend-item"}>
                <img
                  className="popup__icon"
                  src="./images/chosen-tab__images/technologies-icon.svg"
                  alt="Технологии и производство"
                />
                <p className={"map-popup__legend-text"}>
                  Технологии и производство
                </p>
              </div>
            </div>
            <div className={"map-popup__share"}>
              <div className={"map-popup__share-buttons"}>
                <div
                  className="fb-share-button"
                  data-href="https://tourism-index.strelka-kb.com/"
                  data-layout="button"
                  data-size="small"
                  onClick={() => {
                    ym(72433924, "reachGoal", "buttonShare", {
                      social: "Facebook",
                    })
                  }}
                >
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftourism-index.strelka-kb.com%2F&amp;src=sdkpreparse"
                    className="fb-xfbml-parse-ignore"
                  >
                    <img
                      className={"map-popup__share-button"}
                      src={"./images/share-fb.svg"}
                      alt={"Поделиться в Facebook"}
                    />
                  </a>
                </div>
                <a
                  href="https://vk.com/share.php?url=https://tourism-index.strelka-kb.com/"
                  target="_blank"
                  onClick={() => {
                    ym(72433924, "reachGoal", "buttonShare", {
                      social: "VK",
                    })
                  }}
                >
                  <img
                    className={"map-popup__share-button"}
                    src={"./images/share-vk.svg"}
                    alt={"Поделиться в VK"}
                  />
                </a>

                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="twitter-share-button"
                  data-show-count="false"
                  target={"_blank"}
                  onClick={() => {
                    ym(72433924, "reachGoal", "buttonShare", {
                      social: "Twitter",
                    })
                  }}
                >
                  <img
                    className={"map-popup__share-button"}
                    src={"./images/share-twitter.svg"}
                    alt={"Поделиться в Twitter"}
                  />
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                />
              </div>
              <img
                className={"map-popup__share-logo"}
                src={"./images/share-logo.svg"}
                alt={"КБ Стрелка"}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div className="map-popup_hidden" />
  }
}

export default MapPopup
