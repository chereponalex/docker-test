export default function UsefulInfoComponent() {
  const UsefulItem = ({ n, text }) => {
    return (
      <div className="useful__item">
        <div className="useful__item-container">
          <h3 className="useful__text-n">{n}</h3>
          <p className="useful__text">{text}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="useful__info">
      <UsefulItem n={1} text={"Разработать туристический бренд региона"} />
      <UsefulItem
        n={2}
        text={"Репозиционировать сложившиеся региональные бренды"}
      />
      <UsefulItem
        n={3}
        text={
          "Актуализировать существующие стратегии продвижения туристического продукта регионов"
        }
      />
      <UsefulItem
        n={4}
        text={
          "Определить сферы, развитие которых будет наиболее заметно для туристов и существенно повысит привлекательность региона "
        }
      />
      <UsefulItem
        n={5}
        text={"Разработать туристические стратегии и программы"}
      />
      <UsefulItem
        n={6}
        text={
          "Актуализировать существующие планы мероприятий по развитию туристической инфраструктуры"
        }
      />
      <UsefulItem
        n={7}
        text={
          "Определить перспективные направления для развития экскурсионных маршрутов, предприятий торговли и услуг, мест размещения"
        }
      />
      <UsefulItem
        n={8}
        text={"Открыть новые направления и виды туризма в регионе"}
      />
      <UsefulItem
        n={9}
        text={"Выявить новые перспективные объекты туристического просмотра"}
      />
      <UsefulItem n={10} text={"Привлечь в регионы новых туристов"} />
    </div>
  )
}
