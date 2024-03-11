import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';

const ImageSlider = ({ pictures }) => {
	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 2.33,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		draggable: true,
		className: 'favorites-slider',
		swipeToSlide: true,
		swipe: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{pictures?.map((i) => (
				<Container fluid className='favorites-slider__item' key={i.sys.id}>
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
