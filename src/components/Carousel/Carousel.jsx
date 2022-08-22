import React, { useState } from 'react'
import './Carousel.scss'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const Carousel = ({ filtered }) => {
	// const [current, setCurrent] = useState(0)
	const length = filtered.length
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 9000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	}
	return (
		<section className='slider mb-20 container mx-auto'>
			<Slider {...settings}>
				{filtered.map((slide, index) => {
					return (
						<div>
							{
								<div className='slider-items flex justify-between items-start max-w-6xl gap-8 mx-2'>
									<img
										src={API_IMG + slide.backdrop_path}
										alt='No Image'
										className='image'
									/>
									<div className='flex flex-col gap-2'>
										<h1 className='text-3xl font-bold'>{slide.title}</h1>
										<p className=''>{slide.overview}</p>
										<h2>Рейтинг: {slide.vote_average}</h2>
										<h3>Дата выхода: {slide.release_date}</h3>
										<Link
											to={`/movie-info/${slide.id}`}
											className='mx-auto lg:mx-0 px-4 py-2 pink rounded-full w-1/3 text-center'
										>
											Подробнее
										</Link>
									</div>
								</div>
							}
						</div>
					)
				})}
			</Slider>
		</section>
	)
}

export default Carousel
