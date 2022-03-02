import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <a className="nav-link">Evan&apos;s blog</a>
      </Link>
    </nav>
  )
}
