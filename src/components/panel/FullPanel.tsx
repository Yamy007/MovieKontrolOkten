import React from 'react'
import './panel.scss'
import { FC, PropsWithChildren } from 'react'
import { Box } from '@mui/material'

export interface FullPanel extends PropsWithChildren {
	full: boolean
	page: string
	setPage: React.Dispatch<React.SetStateAction<string>>
}

export const Panel = ({ full, page, setPage }: FullPanel) => {
	const fullPanel = () => {
		return (
			<div className='' style={{ position: 'fixed' }}>
				<div className='icon' style={{ marginTop: '2vh' }}>
					<button
						className={page === 'Home' ? 'btn active' : 'btn'}
						onClick={() => setPage('Home')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M23.9864 4.00009C24.3242 4.00009 24.6522 4.11294 24.9185 4.32071L45 20V39.636C44.9985 40.4312 44.5623 41.4377 44 42C43.4377 42.5623 42.4311 42.9985 41.6359 43H27V28H21V43H6.5C5.70485 42.9984 4.56226 42.682 4 42.1197C3.43774 41.5575 3.00163 40.7952 3 40V21L23.0544 4.32071C23.3207 4.11294 23.6487 4.00009 23.9864 4.00009ZM30 28V40H42V21.4314L24 7.40726L6 22V40L18 40V28C18.0008 27.2046 18.3171 26.442 18.8796 25.8796C19.442 25.3171 20.2046 25.0008 21 25H27C27.7954 25.0009 28.5579 25.3173 29.1203 25.8797C29.6827 26.4421 29.9991 27.2046 30 28Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>

						<div className='text '>
							<div className={page === 'Home' ? 'title active' : 'title'}>
								Home
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Tv' ? 'btn active' : 'btn'}
						onClick={() => setPage('Tv')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17 4.00001L24 13L31.0468 4L34.5 4L27.5 13H42C42.7957 13 43.5587 13.3161 44.1213 13.8787C44.6839 14.4413 45 15.2044 45 16V41C45 41.7957 44.6839 42.5587 44.1213 43.1213C43.5587 43.6839 42.7957 44 42 44H6C5.20435 44 4.44129 43.6839 3.87868 43.1213C3.31607 42.5587 3 41.7957 3 41V16C3 15.2044 3.31607 14.4413 3.87868 13.8787C4.44129 13.3161 5.20435 13 6 13L20.5 13L13.5 4L17 4.00001ZM42 41H6V16H42V41Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>

						<div className='text'>
							<div className={page === 'Tv' ? 'title active' : 'title'}>
								Live Tv
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Movies' ? 'btn active' : 'btn'}
						onClick={() => setPage('Movies')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6 3H42C42.7957 3 43.5587 3.31607 44.1213 3.87868C44.6839 4.44129 45 5.20435 45 6V42C45 42.7957 44.6839 43.5587 44.1213 44.1213C43.5587 44.6839 42.7957 45 42 45H6C5.20435 45 4.44129 44.6839 3.87868 44.1213C3.31607 43.5587 3 42.7957 3 42V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3ZM6 42H9L9 38H6V42ZM36 42H12V25H36V42ZM39 42H42V38H39V42ZM39 35H42V30H39V35ZM39 27H42V22H39V27ZM39 19H42V14H39V19ZM39 11H42V6H39V11ZM36 6L12 6L12 22H36V6ZM6 6L9 6V11H6L6 6ZM6 14H9V19H6L6 14ZM6 22H9V27H6L6 22ZM6 30H9V35H6L6 30Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>

						<div className='text'>
							<div className={page === 'Movies' ? 'title active' : 'title'}>
								Movies & Shows
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Discover' ? 'btn active' : 'btn'}
						onClick={() => setPage('Discover')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M31.0012 13.7598C31.0546 13.3494 30.8569 12.9479 30.4999 12.7417C30.1428 12.5355 29.6963 12.5652 29.3675 12.8166L19.0718 20.6938C18.9639 20.7763 18.8699 20.8853 18.802 21.0031C18.734 21.1207 18.6901 21.2507 18.6725 21.3854L16.9985 34.2402C16.9452 34.6508 17.1428 35.0522 17.4999 35.2584C17.8569 35.4645 18.3035 35.435 18.6323 35.1835L28.928 27.3064C29.0358 27.2238 29.1298 27.1148 29.1977 26.9971C29.2656 26.8794 29.3097 26.7494 29.3273 26.6148L31.0012 13.7598ZM26.1649 25.25C25.4746 26.4458 23.9456 26.8554 22.7499 26.1651C21.5541 25.4747 21.1444 23.9458 21.8348 22.75C22.5252 21.5543 24.0541 21.1446 25.2499 21.835C26.4456 22.5253 26.8553 24.0543 26.1649 25.25Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
									<path
										d='M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>

						<div className='text'>
							<div className={page === 'Discover' ? 'title active' : 'title'}>
								Discover
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Watchlist' ? 'btn active' : 'btn'}
						onClick={() => setPage('Watchlist')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M38 6V40.125L24.85 33.74L23.5 33.065L22.15 33.74L9 40.125V6H38ZM38 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V45L23.5 36.5L41 45V6C41 5.20435 40.6839 4.44129 40.1213 3.87868C39.5587 3.31607 38.7957 3 38 3Z'
										fill='currentColor'
									></path>
								</svg>
							</div>
						</div>

						<div className='text'>
							<div className={page === 'Watchlist' ? 'title active' : 'title'}>
								Watchlist
							</div>
						</div>
					</button>
				</div>
			</div>
		)
	}

	const shortPanel = () => {
		return (
			<div
				className=''
				style={{
					position: 'fixed',
					width: '3vw',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'start',
					marginLeft: '.2vw',
				}}
			>
				<div className='icon ' style={{ marginTop: '2vh' }}>
					<button
						className={page === 'Home' ? 'btn active' : 'btn'}
						onClick={() => setPage('Home')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M23.9864 4.00009C24.3242 4.00009 24.6522 4.11294 24.9185 4.32071L45 20V39.636C44.9985 40.4312 44.5623 41.4377 44 42C43.4377 42.5623 42.4311 42.9985 41.6359 43H27V28H21V43H6.5C5.70485 42.9984 4.56226 42.682 4 42.1197C3.43774 41.5575 3.00163 40.7952 3 40V21L23.0544 4.32071C23.3207 4.11294 23.6487 4.00009 23.9864 4.00009ZM30 28V40H42V21.4314L24 7.40726L6 22V40L18 40V28C18.0008 27.2046 18.3171 26.442 18.8796 25.8796C19.442 25.3171 20.2046 25.0008 21 25H27C27.7954 25.0009 28.5579 25.3173 29.1203 25.8797C29.6827 26.4421 29.9991 27.2046 30 28Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Tv' ? 'btn active' : 'btn'}
						onClick={() => setPage('Tv')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17 4.00001L24 13L31.0468 4L34.5 4L27.5 13H42C42.7957 13 43.5587 13.3161 44.1213 13.8787C44.6839 14.4413 45 15.2044 45 16V41C45 41.7957 44.6839 42.5587 44.1213 43.1213C43.5587 43.6839 42.7957 44 42 44H6C5.20435 44 4.44129 43.6839 3.87868 43.1213C3.31607 42.5587 3 41.7957 3 41V16C3 15.2044 3.31607 14.4413 3.87868 13.8787C4.44129 13.3161 5.20435 13 6 13L20.5 13L13.5 4L17 4.00001ZM42 41H6V16H42V41Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Movies' ? 'btn active' : 'btn'}
						onClick={() => setPage('Movies')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6 3H42C42.7957 3 43.5587 3.31607 44.1213 3.87868C44.6839 4.44129 45 5.20435 45 6V42C45 42.7957 44.6839 43.5587 44.1213 44.1213C43.5587 44.6839 42.7957 45 42 45H6C5.20435 45 4.44129 44.6839 3.87868 44.1213C3.31607 43.5587 3 42.7957 3 42V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3ZM6 42H9L9 38H6V42ZM36 42H12V25H36V42ZM39 42H42V38H39V42ZM39 35H42V30H39V35ZM39 27H42V22H39V27ZM39 19H42V14H39V19ZM39 11H42V6H39V11ZM36 6L12 6L12 22H36V6ZM6 6L9 6V11H6L6 6ZM6 14H9V19H6L6 14ZM6 22H9V27H6L6 22ZM6 30H9V35H6L6 30Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Discover' ? 'btn active' : 'btn'}
						onClick={() => setPage('Discover')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M31.0012 13.7598C31.0546 13.3494 30.8569 12.9479 30.4999 12.7417C30.1428 12.5355 29.6963 12.5652 29.3675 12.8166L19.0718 20.6938C18.9639 20.7763 18.8699 20.8853 18.802 21.0031C18.734 21.1207 18.6901 21.2507 18.6725 21.3854L16.9985 34.2402C16.9452 34.6508 17.1428 35.0522 17.4999 35.2584C17.8569 35.4645 18.3035 35.435 18.6323 35.1835L28.928 27.3064C29.0358 27.2238 29.1298 27.1148 29.1977 26.9971C29.2656 26.8794 29.3097 26.7494 29.3273 26.6148L31.0012 13.7598ZM26.1649 25.25C25.4746 26.4458 23.9456 26.8554 22.7499 26.1651C21.5541 25.4747 21.1444 23.9458 21.8348 22.75C22.5252 21.5543 24.0541 21.1446 25.2499 21.835C26.4456 22.5253 26.8553 24.0543 26.1649 25.25Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
									<path
										d='M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z'
										fill='currentColor'
										fillRule='evenodd'
									></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
				<div className='icon'>
					<button
						className={page === 'Watchlist' ? 'btn active' : 'btn'}
						onClick={() => setPage('Watchlist')}
					>
						<div className='s-cont'>
							<div className='img'>
								<svg
									aria-hidden='true'
									className='svg'
									fill='currentColor'
									height='48'
									viewBox='0 0 48 48'
									width='48'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M38 6V40.125L24.85 33.74L23.5 33.065L22.15 33.74L9 40.125V6H38ZM38 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V45L23.5 36.5L41 45V6C41 5.20435 40.6839 4.44129 40.1213 3.87868C39.5587 3.31607 38.7957 3 38 3Z'
										fill='currentColor'
									></path>
								</svg>
							</div>
						</div>
					</button>
				</div>
			</div>
		)
	}
	return full ? fullPanel() : shortPanel()
}
