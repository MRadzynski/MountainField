import Hamburger from '../Hamburger/Hamburger';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMobileMenu = () => setIsOpen(false);
	const toggleSetIsOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<Hamburger isOpen={isOpen} toggleSetIsOpen={toggleSetIsOpen} />
			{isOpen && <Navbar closeMobileMenu={closeMobileMenu} />}
		</>
	);
};

export default MobileNav;
