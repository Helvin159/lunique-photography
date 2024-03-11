import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';

const ImageSlider = ({ pictures }) => {
	var settings = {
		className: 'favorites-slider',
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 2.33,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		draggable: false,
		swipeToSlide: false,
		swipe: false,
		easing: 'ease-in',
		fade: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					draggable: true,
					swipeToSlide: true,
					swipe: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1.33,
					centerMode: true,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
					draggable: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					slidesToScroll: 1,
					swipe: true,
					swipeToSlide: true,
					infinite: true,
					dots: false,
					arrows: false,
					draggable: true,
					touchMove: true,
				},
			},
		],
	};

	if (!pictures) return <p>Loading...</p>;

	if (pictures)
		return (
			<Slider {...settings}>
				{pictures?.map((i) => (
					<Container fluid className='favorites-slider__item' key={i?.sys?.id}>
						<Container fluid className='favorites-slider__item__content'>
							<img
								loading='lazy'
								src={`https:${i?.fields.file.url}`}
								alt={i?.fields.fileName}
							/>
						</Container>
					</Container>
				))}
			</Slider>
		);
};

export default ImageSlider;
