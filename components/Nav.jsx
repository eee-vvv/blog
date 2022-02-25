import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <a className="nav-link">Evan's blog</a>
      </Link>
      <Link href="/bio" passHref>
        <a className="nav-link">Bio</a>
      </Link>
      <Link href="/posts" passHref>
        <a className="nav-link">Posts</a>
      </Link>
    </nav>
  )
}
