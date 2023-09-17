import React, { useEffect, useState } from 'react'
import './discover.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { discoverActions } from '../../redux'
import { Card } from '../../components/card/Card'
import { Pagination } from '@mui/material'
import { IProps } from '../../components/filter/Filter'
import { useOutletContext } from 'react-router-dom'

export const DiscoverPage = () => {
	const chaise = useOutletContext<number[]>()
	const dispatch = useAppDispatch()

	const { results, total_pages } = useAppSelector(state => state.discover)
	useEffect(() => {
		dispatch(discoverActions.getAll())
	}, [])

	return (
		<div className='discoverBox'>
			<div className='discover'>
				{results.map(elem => (
					<Card item={elem} hImage={'35vh'} key={elem.id} height='43vh' />
				))}
			</div>
			<Pagination
				count={total_pages}
				onChange={(e, element) =>
					chaise
						? dispatch(
								discoverActions.filter({ page: element, id: chaise.join(',') })
						  )
						: dispatch(discoverActions.getAll(element))
				}
				variant='outlined'
				color='secondary'
				style={{ transform: 'scale(1.2)' }}
			/>
		</div>
	)
}
