import React from 'react';
import { imageSliderSettings } from '../utilities/utils';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ pictures }) => {
	if (!pictures) return <p>Loading...</p>;

	if (pictures)
		return (
			<Slider {...imageSliderSettings}>
				{pictures?.map((i) => (
					<Container fluid className='favorites-slider__item' key={i?.sys?.id}>
						<Container fluid className='favorites-slider__item__content'>
							<img
								draggable={false}
								loading='lazy'
								src={`https:${i?.fields?.file?.url}`}
								alt={i?.fields?.fileName}
							/>
						</Container>
					</Container>
				))}
			</Slider>
		);
};

export default ImageSlider;
