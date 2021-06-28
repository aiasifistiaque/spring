import React from 'react';
import styles from '../styles/custom/Layout.module.css';
import Hero from '../components/home/Hero';
import HomeMenu from '../components/home/HomeMenu';
import NavBar from '../components/nav/NavBar';

export default function Two() {
	return (
		<div>
			<NavBar />
			<main className={styles.page}>
				<Hero />
				<HomeMenu />
			</main>
			);
		</div>
	);
}
