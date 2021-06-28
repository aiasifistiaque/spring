import React from 'react';
import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import HomeMenu from '../components/home/HomeMenu';

export default function Home() {
	return (
		<Page>
			<Hero />
			<HomeMenu />
		</Page>
	);
}
