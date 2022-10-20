import Link from "next/link"

export default function MainComparison() {
  return (
    <div className="comparison">
      <h3 className="comparison__title">Сравнение регионов</h3>
      <div className="comparison__container">
        <Link href="/segmentationpower">
          <button className="comparison__button">
            <img
              src="./images/main-comparison-images/power-segmentation-image.svg"
              alt="Сегментация по характеру образа"
              className="comparison__image"
            />
            <p className="comparison__text">Сегментация по характеру образа</p>
          </button>
        </Link>

        <Link href="/ratingattractiveness">
          <button className="comparison__button">
            <img
              src="./images/main-comparison-images/popularity-image.svg"
              alt="Рейтинги привлекательности"
              className="comparison__image"
            />
            <p className="comparison__text">Рейтинги привлекательности</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
