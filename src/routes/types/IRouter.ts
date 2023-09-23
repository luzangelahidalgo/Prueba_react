export interface IRoute {
	to: string
	path: string
	Component: () => JSX.Element
	name: string
}
