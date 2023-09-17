import React, { PropsWithChildren } from 'react'
import './header.scss'
import WidgetsIcon from '@mui/icons-material/Widgets'

import IconButton from '@mui/material/IconButton'
import { Search } from '../../components'
import { Avatar } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import { useMatch } from 'react-router-dom'
export interface IProps extends PropsWithChildren {
	setClick: React.Dispatch<React.SetStateAction<boolean>>
	setFilter: React.Dispatch<React.SetStateAction<boolean>>
	filter: boolean
}

export const Header = ({ setClick, setFilter, filter }: IProps) => {
	const isDiscover = useMatch('/discover')
	return (
		<div className='headerContainer'>
			<div className='widget'>
				<IconButton
					aria-label='widget'
					size='large'
					onClick={() => setClick(prev => !prev)}
				>
					<WidgetsIcon fontSize='inherit' sx={{ color: 'white' }} />
				</IconButton>
			</div>
			<div className='logo'>Yamy</div>
			<div className='search'>
				<Search />
				{isDiscover && (
					<IconButton
						sx={{ marginLeft: '0.5vw' }}
						onClick={() => setFilter(prev => !prev)}
					>
						<TuneIcon sx={filter ? { color: '#8d8c8c' } : { color: 'white' }} />
					</IconButton>
				)}
				{/* {filter && <button className='filterBtnClear'>Clear</button>} */}
			</div>
			<div className='empty'></div>
			<div className='panelRight'>
				<Avatar />
			</div>
		</div>
	)
}
