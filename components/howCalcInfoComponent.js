export default function HowCalcInfoComponent() {
  return (
    <div className="calc__info">
      <div className="calc__info-container">
        <div className="calc__info-accented">
          <p className="calc__info-accented-text">более</p>
          <p className="calc__info-accented-number">700</p>
        </div>
        <p className="calc__info-text">
          онлайн-площадок в социальных сетях, блогах, форумах, сайтах отзывов
          было задействовано в сборе данных
        </p>
      </div>
      <div className="calc__info-container">
        <div className="calc__info-accented">
          <p className="calc__info-accented-number">6,3</p>
          <p className="calc__info-accented-text">млн</p>
        </div>
        <p className="calc__info-text">
          текстов были проанализированы с помощью искусственного интеллекта
        </p>
      </div>
      <div className="calc__info-container">
        <div className="calc__info-accented">
          <p className="calc__info-accented-number">12 </p>{" "}
          <p className="calc__info-accented-text"> месяцев</p>
        </div>
        <p className="calc__info-text">
          составил период сбора текстов (июль 2019 г. — июль 2020 г.)
        </p>
      </div>
    </div>
  )
}
