import React, { useState, useEffect } from 'react';
import styles from './NavThree.module.css';
import useGetWindowSize from '../../hooks/useGetWindowSize';
import {
	faBars,
	faTimes,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';

const NavThree = ({ barPressed, open, close }) => {
	const { isDesktop } = useGetWindowSize();
	//const [barPressed, setBarPressed] = useState(false);
	const springStyle = useSpring({
		from: {
			x: '120%',
		},
		to: {
			x: barPressed ? '0%' : '120%',
		},

		delay: 100,
	});

	useEffect(() => {
		isDesktop && close();
	}, [isDesktop]);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbrand}>
				<NavBrand />
			</div>
			{isDesktop ? (
				<div className={styles.navitems}>
					<NavItems />
				</div>
			) : (
				<FontAwesomeIcon
					icon={faBars}
					onClick={open}
					className={styles.navcollapseStraight}
				/>
			)}

			<animated.div className={styles.navitemsSmall} style={springStyle}>
				<FontAwesomeIcon
					icon={faChevronRight}
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
			<a>Brand</a>
		</>
	);
};

const NavItems = () => {
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

export default NavThree;
