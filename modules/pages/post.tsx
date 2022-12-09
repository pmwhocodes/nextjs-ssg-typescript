import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { Post } from "../../types"

interface Params extends ParsedUrlQuery {
	id: string
}

const BlogPostPage: NextPage<{ post: Post }> = ({ post }) => {
	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://dummyjson.com/posts")
	const results = await res.json()

	const ids = results.posts.map((post: Post) => post.id.toString())
	const pathsWithParams = ids.map((id: string) => ({
		params: { id: id },
	}))

	return { paths: pathsWithParams, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
	const params = context.params as Params
	const res = await fetch(`https://dummyjson.com/posts/${params.id}`)
	const post = await res.json()
	return {
		props: { post },
		//revalidate: 10,
	}
}

export { BlogPostPage }
