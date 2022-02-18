import classes from '../styles/components/navbar.module.scss';

export const intersectionHandler = () => {
	const sections = document.querySelectorAll('section');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const targetId = entry.target.id;

				document
					.querySelector(`a[href="#${targetId}"]`)
					.classList.toggle(classes.active, entry.isIntersecting);

				entry.target.classList.toggle('active', entry.isIntersecting);
			});
		},
		{ threshold: 0.2 }
	);

	sections.forEach((card) => {
		observer.observe(card);
	});
};
