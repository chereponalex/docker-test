import Link from "next/link"

export default function ButtonComponent() {
  return (
    <Link href={"/"}>
      <button className="button">← Вернуться на главную</button>
    </Link>
  )
}
