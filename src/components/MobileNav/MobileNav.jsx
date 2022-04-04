import appStyles from '../../styles/components/app.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.querySelector('#app').classList.add(appStyles.stopScrolling);
		} else {
			document.querySelector('#app').classList.remove(appStyles.stopScrolling);
		}
	}, [isOpen]);

	const closeMobileMenu = (e) => {
		e.preventDefault();

		setIsOpen(false);

		const hash = e.target.parentElement.hash.substring(1);
		const sectionToScroll = document.getElementById(hash);

		sectionToScroll.scrollIntoView({ behavior: 'smooth' });
	};

	const toggleSetIsOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<Hamburger isOpen={isOpen} toggleSetIsOpen={toggleSetIsOpen} />
			{isOpen && <Navbar closeMobileMenu={closeMobileMenu} />}
		</>
	);
};

export default MobileNav;
