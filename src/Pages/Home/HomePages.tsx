import React, { useEffect } from 'react'
import './home.scss'
import { Sectors } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { movieActions } from '../../redux/slice/MovieSlice'
import { IResponseMovie } from '../../interface'
export const HomePages = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(movieActions.getAllTop())
		dispatch(movieActions.getAllPopular())
		dispatch(movieActions.getAllNow())
		dispatch(movieActions.getAllUpcoming())
	}, [])

	const { results: topResults }: IResponseMovie = useAppSelector(
		state => state.movie.topMovie
	)

	const { results: popularResults }: IResponseMovie = useAppSelector(
		state => state.movie.popularMovie
	)
	const { results: nowResults } = useAppSelector(
		state => state.movie.now_playing
	)
	const { results: upcomingResults } = useAppSelector(
		state => state.movie.upcoming
	)

	return (
		<div style={{ overflowX: 'hidden' }}>
			<div className='contentMain'>
				<Sectors type={'Top Rated'} results={topResults} />
			</div>
			<div className='contentMain'>
				<Sectors type={'Popular'} results={popularResults} />
			</div>
			<div className='contentMain'>
				<Sectors type={'Now moving'} results={nowResults} />
			</div>
			<div className='contentMain'>
				<Sectors type={'Upcoming'} results={upcomingResults} />
			</div>
		</div>
	)
}
