import Link from "next/link"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [navbarIsFolded, setNavbarIsFolded] = useState(true)
  const handleMenuClick = () => {
    setNavbarIsFolded(!navbarIsFolded)
    navbarIsFolded ? ym(72433924, "reachGoal", "menuOpen") : function () {}
  }
  const handleNotMenuClick = (evt) => {
    if (
      !evt.target.classList.contains("navbar__list_unfolded") &&
      !evt.target.classList.contains("navbar__subtitle")
    ) {
      handleMenuClick()
    }
  }

  useEffect(() => {
    if (!navbarIsFolded) {
      window.addEventListener("click", handleNotMenuClick)
      return () => {
        window.removeEventListener("click", handleNotMenuClick)
      }
    }
  }, [navbarIsFolded])

  return (
    <>
      {/*нужно для того, чтобы при смене позиционирования у навигации на fixed
      не исчезал отступ 70 пикселей, иначе сдвигается вверх основная часть страницы*/}
      {navbarIsFolded ? <></> : <div className={"navbar__imitation"} />}
      <nav
        className={`navbar ${
          navbarIsFolded ? "navbar_inactive" : "navbar_active"
        }`}
      >
        <div className="navbar__container">
          <a className="navbar-brand" href="https://strelka-kb.com/">
            <img
              className="navbar__logo"
              src={
                navbarIsFolded ? "./images/logo.svg" : "./images/logo_dark.svg"
              }
              alt="КБ Стрелка"
            />
          </a>
          <img
            src={
              navbarIsFolded
                ? "./images/navbar-images/menu-icon-folded.svg"
                : "./images/navbar-images/menu-icon-unfolded.svg"
            }
            alt={navbarIsFolded ? "Закрыть меню" : "Открыть меню"}
            onClick={handleMenuClick}
            className="navbar__icon"
          />
        </div>
        <ul
          className={`navbar__list ${
            navbarIsFolded ? "navbar__list_folded" : "navbar__list_unfolded"
          }`}
        >
          <li className="navbar__list-item">
            <Link href="/">
              <a className="navbar__list-item-link">
                Индекс туристической привлекательности регионов
              </a>
            </Link>
          </li>

          <h2 className="navbar__subtitle">Выводы</h2>
          <li className="navbar__list-item">
            <Link href="/keyfactors">
              <a className="navbar__list-item-link">
                Ключевые факторы развития внутреннего туризма
              </a>
            </Link>
          </li>

          <h2 className="navbar__subtitle">Об индексе</h2>

          <li className="navbar__list-item">
            <Link href="/howcalculated">
              <a className="navbar__list-item-link">Как рассчитан индекс</a>
            </Link>
          </li>

          <li className="navbar__list-item">
            <Link href="/howusefull">
              <a className="navbar__list-item-link">Чем полезен индекс</a>
            </Link>
          </li>

          <h2 className="navbar__subtitle">Cравнение регионов</h2>
          <li className="navbar__list-item">
            <Link href="/segmentationpower">
              <a className="navbar__list-item-link">
                Сегментация по характеру образа
              </a>
            </Link>
          </li>

          <li className="navbar__list-item">
            <Link href="/ratingattractiveness">
              <a className="navbar__list-item-link">
                Рейтинги привлекательности
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
