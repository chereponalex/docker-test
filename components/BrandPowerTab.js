import Link from "next/link"
import React from "react"

export default function BrandPowerTab() {
  return (
    <section className="chosen-tab">
      <h2 className="map__title" style={{ marginTop: 70 }}>
        Образ региона
      </h2>
      <p className="chosen-tab__text">
        В зависимости от общего количества упоминаний региона и позитивной или
        негативной эмоциональной окрашенности текстов все регионы распределили
        на четыре группы.
      </p>
      <div className="chosen-tab__container">
        <div className="chosen-tab__item">
          <img
            className="chosen-tab__img"
            src="./images/chosen-tab__images/blue-circle.svg"
            alt="Особые регионы выделены синим цветом"
          />
          <h4 className="chosen-tab__item-title">Особые </h4>
          <p className="chosen-tab__item-text">
            Число текстов выше среднего, преобладают положительные
          </p>
        </div>
        <div className="chosen-tab__item">
          <img
            className="chosen-tab__img"
            src="./images/chosen-tab__images/orange-circle.svg"
            alt="Известные регионы выделены оранжевым цветом"
          />
          <h4 className="chosen-tab__item-title">Известные </h4>
          <p className="chosen-tab__item-text">
            Число текстов выше среднего, преобладают отрицательные
          </p>
        </div>
        <div className="chosen-tab__item">
          <img
            className="chosen-tab__img"
            src="./images/chosen-tab__images/green-circle.svg"
            alt="Скромные регионы выделены зелёным цветом"
          />
          <h4 className="chosen-tab__item-title">Скромные </h4>
          <p className="chosen-tab__item-text">
            Число текстов ниже среднего, преобладают положительные
          </p>
        </div>
        <div className="chosen-tab__item">
          <img
            className="chosen-tab__img"
            src="./images/chosen-tab__images/red-circle.svg"
            alt="Малозаметные регионы выделен красным цветом"
          />
          <h4 className="chosen-tab__item-title">Малозаметные </h4>
          <p className="chosen-tab__item-text">
            Число текстов ниже среднего, преобладают отрицательные
          </p>
        </div>
      </div>
      <Link href="/segmentationpower">
        <button className="button button_long button_wide">
          Изучить сегментацию регионов по характеру образа
        </button>
      </Link>
    </section>
  )
}
