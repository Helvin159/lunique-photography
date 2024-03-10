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
	};

	return (
		<Slider {...settings}>
			{pictures?.map((i) => (
				<Container className='favorites-slider__item'>
					<Container className='favorites-slider__item__content'>
						<img src={`https:${i?.fields.file.url}`} alt={i?.fields.fileName} />
					</Container>
				</Container>
			))}
		</Slider>
	);
};

export default ImageSlider;
