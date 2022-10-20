import Link from "next/link"
import HowCalcInfoComponent from "@/components/howCalcInfoComponent"
import DirectionsInfoComponent from "@/components/DirectionsInfoComponent"
import IndexScoreStructure from "@/components/IndexScoreStructure"
import ButtonComponent from "@/components/ButtonComponent"
import Head from "next/head"

const HowCalculated = () => (
  <article className="main">
    <Head>
      <title>Как рассчитан Индекс?</title>
      <meta
        name="description"
        content="Исследователи КБ Стрелка соотнесли субъективные и объективные показатели: количество и содержание текстов туристов о поездках по России, а также объемы туристического потока в регионах"
      />
      <meta property="og:title" content="Как рассчитан Индекс?" />
      <meta
        property="og:description"
        content="Исследователи КБ Стрелка соотнесли субъективные и объективные показатели: количество и содержание текстов туристов о поездках по России, а также объемы туристического потока в регионах"
      />
      <meta
        property="og:url"
        content="https://tourism-index.strelka-kb.com/howcalculated"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <h1 className="calculated__title">Как рассчитан индекс?</h1>
    <div className="main__texts">
      <p className="main__text">
        Чтобы подготовить Индекс, исследователи КБ Стрелка соотнесли
        субъективные и объективные показатели:
        <br />
        ▶ Количество и содержание текстов туристов о поездках по России (в
        социальных медиа, блогах, на сайтах-агрегаторах отзывов)
        <br />▶ Объемы туристического потока в регионах
      </p>
    </div>
    <IndexScoreStructure />
    <div className="main__texts">
      <p className="main__text">
        Оценка проводилась для 82 регионов России. Из анализа были исключены
        города федерального значения: Москва, Санкт-Петербург и Севастополь.
        <br />
        <br />
        Чтобы исследовать образ регионов России глазами туристов, специалисты КБ
        Стрелка провели анализ 6 300 000 пользовательских текстов в социальных
        медиа методами цифровой антропологии. Для этого применили технологию
        удаленного анализа социальной активности и особенностей восприятия
        городских объектов на материале массива данных из социальных сетей
        (Social Media Listening, SML). Использование SML в исследованиях КБ
        Стрелка позволяет выявить типологию пользователей, составить их портрет
        и исследовать паттерны поведения, а также определить, как пользователи
        относятся к выбранным объектам, на какие проблемы жалуются, описывая
        свой пользовательский опыт. Для анализа массива анонимизированных данных
        применялся графовый алгоритм TextRank и технологии машинного обучения,
        основанные на обработке естественного языка (Natural Language
        Processing, NLP).
        <br />
        <br />
        Площадками для сбора текстов стали социальные сети, блоги, форумы, сайты
        отзывов, всего свыше 700 площадок разного уровня активности: в том
        числе, в социальной сети ВКонтакте было размещено 20 % обнаруженных
        текстов, в сети Одноклассники — 13 %, на Фейсбуке — 7 %, в Инстаграме –
        5 %, в Твиттере – 1 %, на Youtube – 1 %. Исследователи изучили тексты,
        которые были опубликованы за 12 месяцев: с июля 2019 по июль 2020 года,
        — и захватили период пандемии COVID-19 и введения карантинных мер,
        ограничивавших туризм.
      </p>
    </div>
    <HowCalcInfoComponent />
    <div className="main__texts">
      <p className="main__text">
        При разработке портретов регионов в текстах выявили 6 составляющих
        туристического продукта:
      </p>
      <DirectionsInfoComponent
        number="1"
        title="Материальное наследие"
        description="Здания, картины, скульптуры, памятники и так далее."
      />
      <DirectionsInfoComponent
        number="2"
        title="Нематериальное наследие"
        description="Музыка, кулинария, язык, традиции, литература и так далее."
      />
      <DirectionsInfoComponent
        number="3"
        title="Природа"
        description="Горы, реки, леса, дикая фауна, озера, моря и так далее."
      />
      <DirectionsInfoComponent
        number="4"
        title="Событийная программа"
        description="Фестивали, спектакли, концерты и так далее."
      />
      <DirectionsInfoComponent
        number="5"
        title="Технологии и производство"
        description="Космические технологии, сельское хозяйство, промышленность, военная техника и так далее."
      />
      <DirectionsInfoComponent
        number="6"
        title="Туристическая инфраструктура"
        description="Транспортная система, гостиницы, кафе, экскурсии, гиды, сувениры и так далее."
      />
    </div>
    <h2 className="article__title article__title_calc">
      Особенности методики расчета индекса
    </h2>
    <div className="main__texts">
      <h3 className={"article__title_calc-subtitle"}>Широкий охват</h3>
      <p className="main__text">
        Анализ пользовательских текстов в социальных медиа позволяет в короткие
        сроки выявить позиции большого числа людей.{" "}
      </p>
      <h3 className={"article__title_calc-subtitle"}>Непредвзятость</h3>
      <p className="main__text">
        В социальных медиа люди оставляют неспровоцированные суждения.
        Отсутствие влияния исследователя минимизирует социально одобряемые
        ответы. Это позволяет получить более искреннее мнение, чем при
        использовании классических опросных методов.
      </p>
      <h3 className={"article__title_calc-subtitle"}>Эмоциональность</h3>
      <p className="main__text">
        Тексты в социальных медиа, как правило, размещают люди, эмоционально
        вовлеченные в тему обсуждения. Это позволяет получить уникальную
        информацию о запросах, ценностях, практиках целевой аудитории.
      </p>
      <h3 className={"article__title_calc-subtitle"}>Влияние</h3>
      <p className="main__text">
        Тексты пользователей социальных медиа не только отражают их впечатления
        от туристической поездки, но и влияют на их подписчиков, которые могут
        заинтересоваться регионом. Поэтому анализ социальных сетей — это не
        только барометр текущих туристических предпочтений, но и оценка
        привлекательности региона как туристического направления в ближайшем
        будущем.
      </p>
      <h3 className={"article__title_calc-subtitle"}>Перспективность</h3>
      <p className="main__text" style={{ marginBottom: 40 }}>
        Индекс основан на высказываниях людей, активно пользующихся социальными
        сетями. Среди них много молодых людей, которые станут основными
        потребителями туристического продукта в ближайшие десятилетия.
      </p>
    </div>
    <ButtonComponent />
  </article>
)

export default HowCalculated
