import React, { ChangeEvent, FormEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './search.scss'
import { Button, IconButton, MenuItem, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InputBase from '@mui/material/InputBase'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import Divider from '@mui/material/Divider'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import { StyledMenu } from '../menu/Menu'
import { useAppDispatch } from '../../hooks'
import { movieActions } from '../../redux'
import { typeSearchQuery } from '../../constant'
import { SearchBox } from './SearchBox'

export const Search = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [type, setType] = React.useState<string>('')
	const [query, setQuery] = React.useState<string>('')
	const open = Boolean(anchorEl)

	const dispatch = useAppDispatch()

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (type: string) => {
		setAnchorEl(null)
		setType(type)
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e?.preventDefault()

		dispatch(movieActions.search({ query, type }))
	}

	const onSearch = (search: string) => {
		setQuery(search)
		dispatch(movieActions.search({ query, type }))
	}
	return (
		<Paper
			className='searchIn'
			component='form'
			onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: '22vw',
				height: '3vh',
			}}
		>
			<Button
				sx={{ p: '10px', color: 'white' }}
				aria-label='menu'
				id='demo-customized-button'
				className='btnIcon'
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				<MenuIcon />
			</Button>
			<StyledMenu
				id='demo-customized-menu'
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={() => handleClose('')}
			>
				<MenuItem onClick={() => handleClose(typeSearchQuery[0])} disableRipple>
					<LocalMoviesIcon style={{ color: 'white' }} />
					Movie
				</MenuItem>
				<MenuItem onClick={() => handleClose(typeSearchQuery[2])} disableRipple>
					<LiveTvIcon style={{ color: 'white' }} />
					Live Tv
				</MenuItem>
				<Divider sx={{ my: 0.5 }} style={{ background: 'white' }} />
				<MenuItem onClick={() => handleClose(typeSearchQuery[1])} disableRipple>
					<TheaterComedyIcon style={{ color: 'white' }} />
					People
				</MenuItem>
				{/* <MenuItem onClick={handleClose} disableRipple>
					<MoreHorizIcon />
					More
				</MenuItem> */}
			</StyledMenu>
			<InputBase
				sx={{ ml: 2, flex: 1 }}
				style={{ color: 'white' }}
				onClick={type ? () => 0 : handleClick}
				onChange={(e: any) => onSearch(e.target.value)}
				disabled={type ? false : true}
				placeholder={type ? `search by ${type}` : ''}
				inputProps={{ 'aria-label': 'search ' }}
			/>
			<SearchBox />
			<IconButton
				type='submit'
				sx={{ p: '10px', color: 'white' }}
				aria-label='search'
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}
