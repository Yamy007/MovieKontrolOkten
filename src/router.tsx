import { createBrowserRouter } from 'react-router-dom'
import { MainLayouts } from './layouts'
import { HomePages } from './Pages'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayouts />,
		children: [
			{
				index: true,
				element: <HomePages />,
			},
		],
	},
])
