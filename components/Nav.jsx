import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <h2 className="nav-link">Evan's blog</h2>
      </Link>
      <Link href="/bio" passHref>
        <h3 className="nav-link">Bio</h3>
      </Link>
      <Link href="/posts" passHref>
        <h3 className="nav-link">Posts</h3>
      </Link>
    </nav>
  )
}
