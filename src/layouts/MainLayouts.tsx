import React, { useState } from 'react'
import './layouts.scss'
import { Panel } from '../components'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'

export const MainLayouts = () => {
	const [click, setClick] = useState<boolean>(true)
	const [page, setPage] = useState<string>('Home')
	return (
		<div className='main-container'>
			<div className='header'>
				<div className='line'></div>
				<Header setClick={setClick} />
			</div>
			<div className={click ? 'main' : 'main_S'}>
				<div className={click ? 'panel' : 'panel_S'}>
					<Panel full={click} page={page} setPage={setPage} />
				</div>
				<div className='content'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
