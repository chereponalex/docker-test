const DirectionsInfoComponent = ({ number, title, description }) => {
  return (
    <div className="directionsInfo">
      <img
        className={"directionsInfo__icon"}
        src={"./images/howcalculated-imgs/6directions-icons/" + number + ".svg"}
        alt={"icon_" + number}
      />
      <div className="directionsInfo__content">
        <h3 className="directionsInfo__title">{title}</h3>
        <p className="main__text">{description}</p>
      </div>
    </div>
  )
}

export default DirectionsInfoComponent
