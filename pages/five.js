import React, { useState } from 'react';
import styles from '../styles/custom/Layout.module.css';
import Hero from '../components/home/Hero';
import PlaceHolderSection from '../components/PlaceHolderSection';
import NavFive from '../components/navfive/NavFive';

export default function Four() {
	const [barPressed, setBarPressed] = useState(false);
	return (
		<div>
			<NavFive
				open={() => setBarPressed(true)}
				close={() => setBarPressed(false)}
				barPressed={barPressed}
			/>
			<main
				className={styles.page}
				onClick={() => setBarPressed(false)}
				style={{ marginTop: '10vh' }}>
				<Hero />
				<PlaceHolderSection />
				<PlaceHolderSection />
			</main>
			);
		</div>
	);
}
