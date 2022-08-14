import React, { useEffect, useState } from 'react'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieInfo = ({title, path_image}) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}

export default MovieInfo