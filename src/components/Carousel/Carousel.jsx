import React, { useState } from 'react'
import './Carousel.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const Carousel = ({filtered}) => {
	// const [currentSlide, setCurrentSlide] = useState(0)
	// const lenght = filtered.lenght
	// const nextSlide = () => {
	// 	setCurrentSlide(currentSlide === lenght - 1 ? 0 : currentSlide + 1)
	// }
	// const prevSlide = () => {
	// 	setCurrentSlide(currentSlide === 0 ? lenght - 1 : currentSlide - 1)
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
		// <div className='relative flex h-screen justify-center items-center'>
		// 	<button className='absolute top-1/2 left-12' onClick={() => prevSlide()}>prev</button>
		// 	<button className='absolute top-1/2 right-12' onClick={() => nextSlide()}>next</button>
		// 	{filtered.map((item, index) => 
		// 		<div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
		// 			{index === currentSlide && <img className='' src={API_IMG + item.backdrop_path} alt="" />}
		// 		</div>
		// 	)}
		// </div>
		<section className='slider'>
      <BsArrowLeft className='left-arrow' onClick={() => prevSlide()} >Prev</BsArrowLeft>
      <BsArrowRight className='right-arrow' onClick={() => nextSlide()} >Next</BsArrowRight>
      {filtered.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
							<div className='flex justify-between items-start max-w-6xl gap-8'>
								<img src={API_IMG + slide.backdrop_path} alt='No Image' className='image' />
								<div>
									<h1 className='text-3xl font-bold'>{slide.title}</h1>
									<p className=''>{slide.overview}</p>
									<h2>Рейтинг: {slide.vote_average}</h2>
									<h3>Дата выхода: {slide.release_date}</h3>
								</div>
							</div> 
            )}
          </div>
        );
      })}
    </section>
	)
}

export default Carousel