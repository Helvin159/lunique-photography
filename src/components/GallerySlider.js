import React, { useContext, useEffect, useRef } from 'react';
import { GalleryContext } from '../context/GalleryContext';
import { gallerySliderSettings } from '../utilities/utils';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import Loading from './Loading';

const GallerySlider = ({ pictures }) => {
	const { modalIsOpen, setModalIsOpen, slideIndex } =
		useContext(GalleryContext);

	const handleClose = () => {
		if (modalIsOpen) {
			setModalIsOpen(!modalIsOpen);
		}
	};

	let sliderRef = useRef(null);

	useEffect(() => {
		sliderRef.slickGoTo(slideIndex);
	}, [slideIndex]);

	if (!pictures) return <Loading />;

	if (pictures)
		return (
			<Container
				fluid
				className={`gallery-slider ${modalIsOpen ? 'show' : 'hidden'}`}>
				<Button className='mobile-nav__close-btn' onClick={handleClose}>
					&#x2715;
				</Button>
				<Container fluid className='gallery-slider__component'>
					<Slider
						{...gallerySliderSettings}
						ref={(slider) => (sliderRef = slider)}
						initialSlide={slideIndex}>
						{pictures?.map((i) => {
							// console.log(pictures.indexOf(i), 'index');
							return (
								<Container
									fluid
									className='gallery-slider__component__item'
									key={i?.sys?.id}>
									<Container
										fluid
										className=' gallery-slider__component__item__content'>
										<img
											draggable={false}
											loading='lazy'
											data-arr-index={pictures.indexOf(i)}
											src={`https:${i?.fields?.file?.url}`}
											alt={i?.fields?.fileName}
										/>
									</Container>
								</Container>
							);
						})}
					</Slider>
				</Container>
			</Container>
		);
};

export default GallerySlider;
