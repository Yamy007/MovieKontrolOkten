import React, { PropsWithChildren, useEffect } from 'react'
import './card.scss'
import { useAppSelector } from '../../hooks'
import { IMovie } from '../../interface'
import { imageConst } from '../../constant'

export interface FullPanel extends PropsWithChildren {
	item: IMovie
}

export const Card = ({ item }: FullPanel) => {
	return (
		<div className='card'>
			<div className='image'>
				<img src={imageConst + item.poster_path} alt='' />
			</div>
			<div className='decryption'>
				<div className='titleMovie'>{item.title}</div>
				<div className='time'>{item.release_date}</div>
			</div>
		</div>
	)
}
