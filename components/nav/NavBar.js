import React, { useState } from 'react';
import styles from './NavBar.module.css';
import useGetWindowSize from '../../hooks/useGetWindowSize';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const variants = {
	open: { opacity: 1 },
	closed: { opacity: 0 },
};

const NavBar = () => {
	const { height, width } = useGetWindowSize();
	const [barPressed, setBarPressed] = useState(false);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbrand}>
				<a>Brand {width}</a>
			</div>
			<div className={styles.navitems}>
				{width > 1000 ? (
					<NavItemsBigScreen />
				) : (
					<FontAwesomeIcon
						icon={barPressed ? faTimes : faBars}
						onClick={() => setBarPressed(!barPressed)}
						className={styles.navcollapse}
					/>
				)}
			</div>
			<motion.div
				animate={barPressed ? 'open' : 'closed'}
				variants={variants}
				className={styles.smallscreenitems}>
				<NavItemsBigScreen />
			</motion.div>
		</div>
	);
};

const NavItemsSmallScreen = () => {
	return null;
};

const NavItemsBigScreen = () => {
	return (
		<>
			<a>Home</a>
			<a>About</a>
			<a>Menu</a>
			<a>Contact</a>
			<a>Find us</a>
		</>
	);
};

export default NavBar;
