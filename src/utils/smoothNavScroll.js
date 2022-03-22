export const smoothNavScroll = () =>
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});

export const smoothOfferFormScroll = () => {
	document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
};
