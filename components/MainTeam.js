import TeamLeader from "./teamleader.js"
import TeamMember from "./teammember.js"

export default function MainComparison() {
  return (
    <div className="team">
      <h3 className="team__title">Команда проекта</h3>
      <div className="team__container">
        <div className="team__leaders">
          <TeamLeader
            id="0"
            name="Денис Леонтьев"
            description="Сооснователь и генеральный директор КБ Стрелка"
          />
          <TeamLeader
            id="1"
            name="Елена Мандрыко"
            description="Управляющий директор"
          />
          <TeamLeader
            id="2"
            name="Екатерина Малеева"
            description="Директор проектов"
          />
        </div>
        <p className={"team__text"}>
          При участии команд КБ Стрелка: Центра городской антропологии,
          лаборатории «Искусственный интеллект для городов» и дизайн-отдела.
        </p>
        <div className="team__members">
          <h4 className="team__member-name">Александр Анисимов</h4>
          <h4 className="team__member-name">Арсений Плюснин</h4>
          <h4 className="team__member-name">Дарья Радченко</h4>
          <h4 className="team__member-name">Дмитрий Кочергин</h4>
          <h4 className="team__member-name">Иван Пахомов</h4>
          <h4 className="team__member-name">Илья Кузьмин</h4>
          <h4 className="team__member-name">Ксения Краснова</h4>
          <h4 className="team__member-name">Наиля Сафина</h4>
          <h4 className="team__member-name">Сергей Панфилов</h4>
          <h4 className="team__member-name">Светлана Карташевская</h4>
          <h4 className="team__member-name">София Лобанова</h4>
          <h4 className="team__member-name">Петр Торкановский</h4>
        </div>
      </div>
    </div>
  )
}
