export default function RootTemplate({ children }: {children: React.ReactNode}) {
	return <div>
		<div>root template</div>
		{children}
	</div>
}