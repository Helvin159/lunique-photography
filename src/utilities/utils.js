import { createClient } from 'contentful-management';
import emailjs from 'emailjs-com';

export const emailRegex =
	// eslint-disable-next-line no-useless-escape
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const paginate = (array, pageSize, pageNumber) => {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const pathName = window.location.pathname;

export const sendEmail = (name, email, message, ref) => {
	let msg = `${message ? message : 'No message.'}`;

	let templateParams = {
		from_name: name[0].toString().toUpperCase() + name.slice(1),
		from_email: email,
		message: msg,
	};

	// Check if name is empty
	// if (name === '' || null) {
	// 	.current[0].classList.add('error');
	// 	setTimeout(() => nameInput.classList.remove('error'), 3000);
	// }

	// Check if email input is empty or doesnt match email pattern
	// if (email === '' || null || !emailRegex.test(email)) {
	// emailInput.classList.add('error');
	// setTimeout(() => emailInput.classList.remove('error'), 3000);
	// console.log('no match');
	// }

	// If email and name checks, send email
	// if (
	// 	(((name !== '' || null) && email !== '') || null) &&
	// 	emailRegex.test(email)
	// ) {
	emailjs
		.send(
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			templateParams,
			process.env.REACT_APP_PUBLIC_KEY
		)
		.then(
			(res) => {
				console.log('SUCCESS!', res.status, res.text);
				return 'success';
				// alert('Message sent');
			},
			(err) => {
				console.log('FAILED...', err);
				// alert('Message failed, please try again...');
			}
		);
	// }
};

export const handleNewMessage = async (
	name,
	email,
	message,
	ref,
	navigate,
	pathname,
	thankYouCtxSetter,
	btn
) => {
	btn.disabled = true;
	const client = createClient({
		accessToken: process.env.REACT_APP_CONTENTFUL_CMA_TOKEN_KEY,
	});

	const space = await client.getSpace(
		process.env.REACT_APP_CONTENTFUL_SPACE_ID
	);

	const env = await space.getEnvironment(
		process.env.REACT_APP_CONTENTFUL_ENV_ID
	);

	env
		.createEntry(process.env.REACT_APP_CONTENTFUL_MESSAGES_CONTENT_TYPE, {
			fields: {
				name: { 'en-US': `${name}` },
				email: { 'en-US': `${email}` },
				message: { 'en-US': `${message}` },
			},
		})
		.then((entry) => entry.publish())
		.then((entry) => {
			console.log(entry, 'success');
			console.log(ref);

			sendEmail(name, email, message);
			thankYouCtxSetter(true);

			setTimeout(() => {
				ref.current.reset();

				if (navigate && pathname && pathname !== '/') {
					navigate('/');
				}

				setTimeout(() => {
					thankYouCtxSetter(false);
					btn.disabled = false;
				}, 1250);
			}, 3000);
		})
		.catch(console.error, 'error');
};

export const gallerySliderSettings = {
	className: 'gallery-slider-comp',
	dots: false,
	infinite: true,
	autoplay: false,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	centerMode: false,
	draggable: false,
	swipeToSlide: true,
	swipe: true,
	easing: 'ease-in',
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
				slidesToShow: 1,
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
				fade: true,
			},
		},
	],
};

export const imageSliderSettings = {
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
				fade: true,
			},
		},
	],
};
