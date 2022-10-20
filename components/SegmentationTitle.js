export default function SegmentationTitle({ title_text, color }) {
  return (
    <div className="segmentation__title-container">
      <img
        src={`./images/chosen-tab__images/${color}-circle.svg`}
        alt={title_text}
        className="segmentation__title-number"
      />
      <h2 className="segmentation__title">{title_text}</h2>
    </div>
  )
}
