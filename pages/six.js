import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import styles from '../styles/custom/Layout.module.css';
import heroStyles from '../components/home/style/Hero.module.css';
import PlaceHolderSection from '../components/PlaceHolderSection';
import NavFive from '../components/navfive/NavFive';
import Hero from '../components/home/Hero';
import HeroTwo from '../components/home/HeroTwo';
import HeroThree from '../components/home/HeroThree';
import carStyles from '../styles/Carousal.module.css';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGetWindowSize from '../hooks/useGetWindowSize';

export default function Six() {
	const [barPressed, setBarPressed] = useState(false);

	const compArray = [<Hero />, <HeroTwo />, <HeroThree />];
	const [index, setIndex] = useState(0);

	const [reverse, setReverse] = useState(false);

	const transitions = useTransition(index, {
		keys: index,
		initial: { opacity: 1, transform: `translateX(0px)` },
		from: {
			opacity: 1,
			transform: reverse ? `translateX(-100%)` : `translateX(100%)`,
		},
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: {
			opacity: 1,
			transform: reverse ? `translateX(100%)` : `translateX(-100%)`,
		},
		delay: 20,
		config: { duration: 1000 },
	});

	const next = () => {
		setReverse(false);
		setIndex(state => (state + 1) % 3);
	};

	const prev = () => {
		setReverse(true);
		if (index == 0) {
			setIndex(2);
		} else {
			setIndex(state => state - 1);
		}
	};

	return (
		<div>
			<NavFive
				open={() => setBarPressed(true)}
				close={() => setBarPressed(false)}
				barPressed={barPressed}
			/>
			<main className={styles.page}>
				<div className={carStyles.arrowContainer}>
					<a onClick={prev}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</a>
					<a onClick={next}>
						<FontAwesomeIcon icon={faChevronRight} />
					</a>
				</div>

				{transitions((style, i) => (
					<animated.div
						style={{
							position: 'absolute',
							width: '100vw',
							...style,
						}}
						key={i}>
						{compArray[i]}
					</animated.div>
				))}

				<div style={{ marginTop: '100vh' }}>
					<PlaceHolderSection />
					<PlaceHolderSection />
					<PlaceHolderSection />
				</div>
			</main>
		</div>
	);
}
