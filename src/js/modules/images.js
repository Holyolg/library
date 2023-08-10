const images = () => {
	const imgModal = document.createElement('div'),
		section = document.querySelector('.works'),
		bigImg = document.createElement('img');

	imgModal.classList.add('popup');
	section.appendChild(imgModal);

	imgModal.style.cssText = 'justify-content: center; align-items: center; display: none; ';
	bigImg.style.cssText = 'max-width: 100%; height: auto';

	imgModal.appendChild(bigImg);

	section.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgModal.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
			document.body.style.overflow = 'hidden';
		}

		if (target && target.matches('div.popup')) {
			imgModal.style.display = 'none';
			document.body.style.overflow = '';

		}
	});
};

export default images;