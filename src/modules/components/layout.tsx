import Link from "next/link"
import { ReactNode } from "react"

import styles from "./layout.module.css"

type LayoutProps = {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<nav className={styles.nav}>
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
			</nav>
			<main className={styles.content}>{children}</main>
			<footer style={{ fontStyle: "italic", marginTop: "2rem" }}>
				SSG Test Example - 2022
			</footer>
		</>
	)
}

export { Layout }
