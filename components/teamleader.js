export default function TeamLeader({ id, name, description }) {
  return (
    <div className="team__leader">
      <div
        className="team__leader-image"
        style={{ "background-image": 'url("/images/team/' + id + '.jpg")' }}
      />
      <h4 className="team__leader-name">{name}</h4>
      <p className="team__leader-description">{description}</p>
    </div>
  )
}
