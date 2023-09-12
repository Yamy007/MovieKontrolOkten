import React, { PropsWithChildren } from 'react'
import './sectors.scss'
import { Card } from '../card/Card'
import { useRef } from 'react'
import { IMovie, IResponseMovie } from '../../interface'
import { useAppSelector } from '../../hooks'

export interface ISectors extends PropsWithChildren {
	results: IMovie[]
	type: string
}

export const Sectors = ({ results, type }: ISectors) => {
	return (
		<div className='sectorsMain'>
			<div>
				<div className='title'>{type}</div>
			</div>
			<div className='content'>
				{results.map((item, index) => (
					<Card item={item} key={index} />
				))}
			</div>
		</div>
	)
}
