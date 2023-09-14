import React, { PropsWithChildren } from 'react'
import { useAppSelector } from '../../hooks'
import { imageConst } from '../../constant'

export interface ISearchBox extends PropsWithChildren {}
export const SearchBox = () => {
	const { isLoading, results } = useAppSelector(state => state.movie.search)
	console.log(results)
	return (
		<div className='searchBox'>
			{isLoading && <span className='loader'></span>}
			<div className='title'>People</div>
			{results?.map((elem, index) => (
				<div className='card-container' key={index}>
					<div className='card'>
						<div className='image'>
							<img src={imageConst + elem.poster_path} />
						</div>
						<div className='description'>
							<div className='tit'>{elem.title}</div>
							<div className='desc'>{elem.vote_average}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
