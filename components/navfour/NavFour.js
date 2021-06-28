import React, { useState, useEffect } from 'react';
import styles from './NavFour.module.css';
import useGetWindowSize from '../../hooks/useGetWindowSize';
import {
	faBars,
	faTimes,
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';

const NavFour = ({ barPressed, open, close }) => {
	const { isDesktop } = useGetWindowSize();
	//const [barPressed, setBarPressed] = useState(false);
	const springStyle = useSpring({
		from: {
			x: '-120%',
		},
		to: {
			x: barPressed ? '0%' : '-120%',
		},

		delay: 100,
	});

	return (
		<div className={styles.navbar}>
			<FontAwesomeIcon
				icon={faBars}
				onClick={open}
				className={styles.navcollapseStraight}
			/>
			<div className={styles.navbrand}>
				<NavBrand />
			</div>

			<div className={styles.navRight}>
				<a>Login</a>
			</div>

			<animated.div className={styles.navitemsSmall} style={springStyle}>
				<FontAwesomeIcon
					icon={faChevronLeft}
					onClick={close}
					className={styles.navCloseBtn}
				/>
				<NavItems />
			</animated.div>
		</div>
	);
};

const NavBrand = () => {
	return (
		<>
			<a>Demo Brand......</a>
		</>
	);
};

const NavItems = () => {
	return (
		<>
			<a>Home</a>
			<a>About</a>
			<a>Menu</a>
			<a>Team</a>
			<a>Our Story</a>
			<a>Categories</a>
			<a>Shop Now</a>
			<a>Contact</a>
			<a>Find us</a>
			<a>Privacy Policy</a>
			<a>Terms of use</a>
		</>
	);
};

export default NavFour;
