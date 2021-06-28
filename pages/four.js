import React, { useState } from 'react';
import styles from '../styles/custom/Layout.module.css';
import Hero from '../components/home/Hero';
import NavFour from '../components/navfour/NavFour';
import PlaceHolderSection from '../components/PlaceHolderSection';

export default function Four() {
	const [barPressed, setBarPressed] = useState(false);
	return (
		<div>
			<NavFour
				open={() => setBarPressed(true)}
				close={() => setBarPressed(false)}
				barPressed={barPressed}
			/>
			<main className={styles.page} onClick={() => setBarPressed(false)}>
				<Hero />
				<PlaceHolderSection />
				<PlaceHolderSection />
			</main>
			);
		</div>
	);
}
