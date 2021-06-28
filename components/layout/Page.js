import React from 'react';
import styles from '../../styles/custom/Layout.module.css';
import NavBar from '../nav/NavBar';
import NavBar2 from '../navtwo/NavBar';

const Page = ({ children }) => {
	return (
		<div style={{ overflowX: 'hidden' }}>
			{/* <NavBar /> */}
			<div style={{ overflowX: 'hidden' }}>
				<NavBar2 />
			</div>

			<main className={styles.page}> {children}</main>
		</div>
	);
};

export default Page;
