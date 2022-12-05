export interface GetPostData {
	info: Info
	posts: Post[]
}

export interface Post {
	id: number
	title: string
	body: string
	userId: number
	tags: string[]
	reactions: number
}

export interface Info {
	total: number
	skip: number
	limit: number
}
