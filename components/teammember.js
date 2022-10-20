export default function TeamMember({ name, description }) {
  return (
    <div className="team__member">
      <h4 className="team__member-name">{name}</h4>
      <p className="team__member-description">{description}</p>
    </div>
  )
}
