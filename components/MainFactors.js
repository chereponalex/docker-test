import Link from "next/link"

export default function MainFactors() {
  return (
    <div className="main__factors">
      <img
        className="main__factors-image"
        alt="Ключевые факторы"
        src="./images/main__factors-images/factors.svg"
      />
      <h3 className="main__factors-title">
        Ключевые факторы развития внутреннего туризма в России
      </h3>
      <p className="main__factors-text">
        Чего хотят российские туристы? Как сделать свой регион привлекательнее?
        Что сегодня препятствует развитию внутреннего туризма? Основные выводы
        из исследования туристической привлекательности российских регионов — по
        ссылке.
      </p>
      <Link href="/keyfactors">
        <button className="button button_long">
          Как сделать регионы России привлекательнее?
        </button>
      </Link>
    </div>
  )
}
