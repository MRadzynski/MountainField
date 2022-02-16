import classes from '../styles/components/navbar.module.scss';

export const intersectionHandler = () => {
	const sections = document.querySelectorAll('section');

	const observer = new IntersectionObserver(
		(entries) => {
			console.log(entries);
			entries.forEach((entry) => {
				const targetId = entry.target.id;

				const heh = document
					.querySelector(`a[href="#${targetId}"]`)
					.classList.toggle(classes.active, entry.isIntersecting);
				console.log('heh', heh);
				entry.target.classList.toggle('active', entry.isIntersecting);
			});
		},
		{ threshold: 0.2 }
	);

	sections.forEach((card) => {
		observer.observe(card);
	});
};
