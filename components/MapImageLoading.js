import { useEffect, useState } from "react"

export default function MapImageLoading({ id, handleOpenPopup }) {
  const [loading, setLoading] = useState(true)
  const [currentSrc, updateSrc] = useState("./images/spinner.png")

  useEffect(() => {
    const img = new Image()
    img.src = `./images/map-popup/radars/${id}.svg`
    img.onload = () => {
      updateSrc(`./images/map-popup/radars/${id}.svg`)
      setLoading(false)
    }
  }, [id])

  return (
    <>
      {loading ? (
        <div className={"loading__popup"}>
          <div className={"loading__popup-container"}>
            <img className={"loading__popup-image"} alt={""} src={currentSrc} />
          </div>
        </div>
      ) : (
        <div className={"loading__popup"}>
          <img className={"map-popup__image"} src={currentSrc} alt={""} />
        </div>
      )}
    </>
  )
}
