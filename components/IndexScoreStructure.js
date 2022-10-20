import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const IndexScoreStructure = () => {
  const [mobile, setMobile] = useState(false)
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  useEffect(() => {
    // без этой проверки при перезагрузке на мобильном иногда
    // подгружается изображение не для мобильного
    if (isMobile) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [isMobile])

  return (
    <div className="indexScoreStructure">
      <h2 className="article__title">Структура оценки по индексу</h2>
      <img
        src={`./images/howcalculated-imgs/how-calculated-${
          mobile ? "mobile" : "2"
        }.svg`}
        alt={"Структура оценки"}
        className="indexScoreStructure__image"
      />
    </div>
  )
}

export default IndexScoreStructure
