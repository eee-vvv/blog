import Link from 'next/link'

export default function PostLink({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="postLink">
        <h3>{post.frontMatter.title}</h3>
        <div>{post.frontMatter.description}</div>
      </div>
    </Link>
  )
}
