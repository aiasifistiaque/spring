import React, { useState } from 'react';
import styles from '../styles/custom/Layout.module.css';
import Hero from '../components/home/Hero';
import HomeMenu from '../components/home/HomeMenu';
import NavThree from '../components/navthree/NavThree';
import PlaceHolderSection from '../components/PlaceHolderSection';

export default function Three() {
	const [barPressed, setBarPressed] = useState(false);
	return (
		<div>
			<NavThree
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
