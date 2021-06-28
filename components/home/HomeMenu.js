import React from 'react';
import { fakeMenu } from '../../data/menu';
import styles from './style/HomeMenu.module.css';

const HomeMenu = () => {
	return (
		<div className={styles.homeMenu}>
			<h1>Our Menu</h1>
			<p>Lorem ipsum dolor sit amet</p>
			<div style={{ maxHeight: '120vh', overflow: 'hidden' }}>
				{fakeMenu.section.map(item => (
					<div className={styles.sections}>
						<h3>{item.title}</h3>
						{item.items.map((item, i) => (
							<div className={styles.sectionitem}>
								<div className={styles.sectionitemnames}>
									<h5>{item.name}</h5>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do
									</p>
								</div>
								<p>${item.price}.0</p>
							</div>
						))}
					</div>
				))}
			</div>
			<div className={styles.button}>
				<a>View Full Menu</a>
			</div>
		</div>
	);
};

export default HomeMenu;
