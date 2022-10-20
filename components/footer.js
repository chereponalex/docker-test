import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link href="/">
          <h3 className="footer__title">
            <a>Индекс туристической привлекательности регионов России</a>
          </h3>
        </Link>
        <nav className="footer__nav">
          <div className="footer__links-container">
            <h4 className="footer__links-title">Об индексе</h4>
            <ul className="footer__links">
              <li className="footer__link">
                <Link href="/howcalculated">
                  <a className="footer__link">Как рассчитан индекс?</a>
                </Link>
              </li>
              <li className="footer__link">
                <Link href="/howusefull">
                  <a className="footer__link">Чем полезен индекс?</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-container">
            <h4 className="footer__links-title">Сравнение регионов</h4>
            <ul className="footer__links">
              <li className="footer__link">
                <Link href="/segmentationpower">
                  <a className="footer__link">
                    Сегментация по характеру образа
                  </a>
                </Link>
              </li>
              <li className="footer__link">
                <Link href="/ratingattractiveness">
                  <a className="footer__link">Рейтинги привлекательности</a>
                </Link>
              </li>
            </ul>
            <h4 className="footer__links-title">Выводы</h4>
            <ul className="footer__links">
              <li className="footer__link">
                <Link href="/keyfactors">
                  <a className="footer__link">
                    Ключевые факторы развития внутреннего туризма
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="footer__made-by">
        <div className="footer__contacts">
          <p className="footer__contacts-title">Связаться с нами </p>
          <div className="footer__contact">
            <img
              src="./images/footer/email.png"
              alt="Почтовый ящик"
              className="footer__email-icon"
            />
            <p className="footer__contact-text">
              Пресса —{" "}
              <a
                href="mailto:pr@strelka-kb.com"
                className="footer__contact-link"
              >
                pr@strelka-kb.com
              </a>
            </p>
          </div>
          <div className="footer__contact">
            <img
              src="./images/footer/email.png"
              alt="Почтовый ящик"
              className="footer__email-icon"
            />
            <p className="footer__contact-text">
              Вопросы по содержанию индекса —{" "}
              <a
                href="mailto:index-tourism@strelka-kb.com"
                className="footer__contact-link"
              >
                index-tourism@strelka-kb.com{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__made-by-container">
            <p className="footer__made-by-text">Сделано командой</p>
            <img
              src="./images/logo.svg"
              alt="КБ Стрелка"
              className="footer__logo"
            />
          </div>
          <p className="footer__made-by-text">
            © 2021. KB Index. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
