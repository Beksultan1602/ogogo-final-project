import React, { useState } from 'react'
import './Carousel.scss'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const Carousel = ({filtered}) => {

	const [current, setCurrent] = useState(0);
  const length = filtered.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(filtered) || filtered.length <= 0) {
    return null;
  }

	return (

		<section className='slider mb-20 container mx-auto'>
      <BsArrowLeft className='left-arrow' onClick={() => prevSlide()} >Prev</BsArrowLeft>
      {filtered.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
							<div className='slider-items flex justify-between items-start max-w-6xl gap-8 mx-2'>
								<img src={API_IMG + slide.backdrop_path} alt='No Image' className='image' />
								<div className='flex flex-col gap-2'>
									<h1 className='text-3xl font-bold'>{slide.title}</h1>
									<p className=''>{slide.overview}</p>
									<h2>Рейтинг: {slide.vote_average}</h2>
									<h3>Дата выхода: {slide.release_date}</h3>
                  <Link to={`/movie-info/${slide.id}`} className='mx-auto lg:mx-0 px-4 py-2 pink rounded-full w-1/3 text-center'>Подробнее</Link>      
								</div>
                
							</div> 
            )}
          </div>
        );
      })}
      <BsArrowRight className='right-arrow' onClick={() => nextSlide()} >Next</BsArrowRight>
      <div className='flex gap-6 my-6 text-3xl'>
        <BsArrowLeft className='block sm:hidden ' onClick={() => prevSlide()} >Prev</BsArrowLeft>
        <BsArrowRight className='block sm:hidden ' onClick={() => nextSlide()} >Next</BsArrowRight>
      </div>
    </section>
	)
}

export default Carousel