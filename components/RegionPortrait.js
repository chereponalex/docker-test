import PortraitItem from "@/components/PortraitItem"

export default function RegionPortrait() {
  return (
    <section className={"portrait"}>
      <h3 className={"portrait__title"}>Портрет региона </h3>
      <p className={"portrait__text"}>
        Отзывы о каждом регионе распределены по шести направлениям, связанным с
        туристическим опытом. Благодаря этому Индекс позволяет понять, что
        именно принесло региону популярность, какие составляющие туристического
        продукта понравились посетителям, а какие разочаровали.
        <br />
        <br />
        По некоторым направлениям удалось определить отдельные объекты и
        события, которые вызвали самую яркую реакцию.
      </p>
      <div className={"portrait__icons"}>
        <PortraitItem
          description={"Предметы и объекты, созданные человеком"}
          title={"Материальное наследие"}
          number={1}
        />
        <PortraitItem
          number={2}
          title={"Нематериальное  наследие"}
          description={"Уникальная нематериальная культура региона"}
        />
        <PortraitItem
          number={3}
          title={"Природа"}
          description={"Природные объекты, привлекающие туристов"}
        />
        <PortraitItem
          number={4}
          title={"Событийная программа"}
          description={"Фестивали, спектакли, концерты, проводимые в регионе"}
        />
        <PortraitItem
          number={5}
          title={"Технологии и производство"}
          description={"Значимые для современного культурного контекста"}
        />
        <PortraitItem
          number={6}
          title={"Туристическая инфраструктура"}
          description={"Объекты и сервисы, обеспечивающие комфорт"}
        />
      </div>
    </section>
  )
}
