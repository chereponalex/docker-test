import Link from "next/link"

export default function AboutIndex() {
  return (
    <div className="about">
      <h3 className="comparison__title">Об индексе</h3>
      <div className="comparison__container">
        <Link href="/howcalculated">
          <button className="comparison__button">
            <img
              src="./images/main-about-images/calc.svg"
              alt="Как рассчитан индекс?"
              className="comparison__image"
            />

            <p className="comparison__text">Как расcчитан индекс?</p>
          </button>
        </Link>

        <Link href="howusefull">
          <button className="comparison__button">
            <img
              src="./images/main-about-images/diamond.svg"
              alt="Чем полезен индекс?"
              className="comparison__image"
            />
            <p className="comparison__text">Чем полезен индекс?</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
