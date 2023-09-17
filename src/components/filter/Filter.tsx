import './filter.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IGenreRes } from '../../interface'
import { FC, PropsWithChildren } from 'react'
import { discoverActions } from '../../redux'
import { useMatch } from 'react-router-dom'

export interface IProps extends PropsWithChildren {
	filter: boolean
	chaise: number[]
	setChaise: React.Dispatch<React.SetStateAction<number[]>>
}

export const Filter: FC<IProps> = ({ filter, chaise, setChaise }) => {
	const page = useAppSelector(state => state.discover.page)
	const isDiscover = useMatch('/discover')

	const { genres }: IGenreRes = useAppSelector(state => state.genre)
	const dispatch = useAppDispatch()

	const onChaise = (id: number) => {
		if (chaise?.includes(id)) {
			setChaise(prev => {
				dispatch(
					discoverActions.filter({
						page: page,
						id: prev.filter(item => item !== id).join(','),
					})
				)
				return prev.filter(item => item !== id)
			})
		} else {
			setChaise(prev => {
				dispatch(
					discoverActions.filter({
						page: page,
						id: [...prev, id].join(','),
					})
				)
				return [...prev, id]
			})
		}
	}

	return (
		<>
			{filter && isDiscover && (
				<div className='filterBox'>
					{genres.map(elem => (
						<button
							key={elem.id}
							style={chaise?.includes(elem.id) ? { background: '#BABABA' } : {}}
							onClick={() => onChaise(elem.id)}
						>
							{elem.name}
						</button>
					))}
				</div>
			)}
		</>
	)
}
