import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../styles/Home.module.css'
import PostLink from '../components/PostLink'

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  console.log(posts)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <h1>Evan's Blog</h1>
          {
            posts.map((post, idx) => {
              return <PostLink post={post} key={idx} />
            })
          }
        </div>
      </main>
    </div>
  )
}
