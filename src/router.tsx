import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { MainLayouts } from './layouts'
import { DiscoverPage, HomePages, MoviesPages } from './Pages'
import { cloneElement } from 'react'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayouts />,
		children: [
			{
				index: true,
				element: <HomePages />,
			},
			{
				path: 'discover',
				element: <DiscoverPage />,
			},
			{
				path: 'movies/:id',
				element: <MoviesPages />,
			},
		],
	},
])
