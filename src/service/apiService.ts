import axios from 'axios'
import { baseURL } from '../constant'

export const apiService = axios.create({
	baseURL,
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTQxMmQ0MDNmOGNlM2E1OTFlMDFiODFjMGIxMTJjNiIsInN1YiI6IjY0YzBkZTQ5ZGY4NmE4MDEwNjM2OGQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJ8r3YibvTE_z6DKrXHQuU-ARzeH8kxK1JEuy5L9GPE',
	},
})
