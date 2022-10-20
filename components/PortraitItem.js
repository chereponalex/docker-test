export default function PortraitItem({ title, number, description }) {
  return (
    <div className={"portrait__icons-item"}>
      <img
        className={"portrait__icon"}
        src={"./images/howcalculated-imgs/6directions-icons/" + number + ".svg"}
        alt={"icon_" + number}
      />
      <p className={"portrait__icon-title"}>{title}</p>
      <p className={"portrait__icon-text"}>{description}</p>
    </div>
  )
}
