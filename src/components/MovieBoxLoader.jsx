import React from 'react'
import ContentLoader from "react-content-loader"
const MovieBoxLoader = () => {
	return (
		<ContentLoader 
    speed={2}
    width={200}
    height={348}
    viewBox="0 0 200 348"
    backgroundColor="#e9e9e9"
    foregroundColor="#ecebeb"

  >
    <rect x="0" y="0" rx="0" ry="0" width="200" height="300" /> 
    <rect x="0" y="307" rx="0" ry="0" width="200" height="40" />
  </ContentLoader>
	)
}

export default MovieBoxLoader