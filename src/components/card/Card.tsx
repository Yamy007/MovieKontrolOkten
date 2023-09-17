import React, { PropsWithChildren, useEffect } from 'react'
import './card.scss'
import { IMovie } from '../../interface'
import { imageConst } from '../../constant'
import { Link } from 'react-router-dom'

export interface FullPanel extends PropsWithChildren {
	item: IMovie
	height?: string
	hImage?: string
}

export const Card = ({ item, height, hImage }: FullPanel) => {
	return (
		<Link
			to={`/movies/${item.id}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
		>
			<div className='card' style={{ height: height }}>
				<div className='image'>
					<img
						src={imageConst + item.poster_path}
						alt=''
						style={{ height: hImage }}
					/>
				</div>
				<div className='decryption'>
					<div className='titleMovie'>{item.title}</div>
					<div className='time'>{item.release_date}</div>
				</div>
			</div>
		</Link>
	)
}
