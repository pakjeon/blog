import { use } from "react"

async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 5000))
  return {
    message: 'Hello, 关于我!',
  }
}

export default function About() {
	const { message } = use(getData());
  return (
		<section>{message}</section>
  )
}
