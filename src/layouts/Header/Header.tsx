import React, { PropsWithChildren } from 'react'
import './header.scss'
import WidgetsIcon from '@mui/icons-material/Widgets'

import IconButton from '@mui/material/IconButton'
import { Search } from '../../components'
import { Avatar } from '@mui/material'

export interface Icon extends PropsWithChildren {
	setClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setClick }: Icon) => {
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
			</div>
			<div className='empty'></div>
			<div className='panelRight'>
				<Avatar />
			</div>
		</div>
	)
}
