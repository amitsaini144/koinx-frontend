interface myProps{
    label: string
}

export default function NavLink({label} : myProps ) {
  return (
    <a href="/" className="font-medium px-4  text-sm">{label}</a>
  )
}
