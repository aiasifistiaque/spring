import React, { useState, useEffect } from 'react';
import styles from './NavV2.module.css';
import useGetWindowSize from '../../hooks/useGetWindowSize';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from 'react-spring';

const NavBar = () => {
	const { isDesktop } = useGetWindowSize();
	const [barPressed, setBarPressed] = useState(false);
	const springStyle = useSpring({
		from: {
			x: '100%',
		},
		to: {
			x: barPressed ? '0%' : '100%',
		},

		delay: 100,
	});

	useEffect(() => {
		isDesktop && setBarPressed(false);
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
					onClick={() => setBarPressed(!barPressed)}
					className={
						barPressed ? styles.navcollapseRotate : styles.navcollapseStraight
					}
				/>
			)}

			<animated.div className={styles.navitemsSmall} style={springStyle}>
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

export default NavBar;
