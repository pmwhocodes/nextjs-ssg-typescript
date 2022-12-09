import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { GetPostData } from "../../../types"
import styles from "./blog.module.css"

const BlogPage: NextPage<{ postData: GetPostData }> = ({ postData }) => {
	return (
		<>
			<Head>
				<title>SSG Blog</title>
			</Head>
			<section className={styles.blogList}>
				{postData.posts.map((post) => (
					<Link key={post.id} href={`/blog/${post.id}`}>
						<div className={styles.post}>
							<p>{post.title}</p>
							<div>
								{post.tags.map((tag, index) => (
									<p className={styles.tags} key={index}>
										{tag}
									</p>
								))}
							</div>
						</div>
					</Link>
				))}
			</section>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://dummyjson.com/posts")
	const results = await res.json()

	return {
		props: { postData: results },
		revalidate: 10,
	}
}

export { BlogPage }
