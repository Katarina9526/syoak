import * as React from 'react';
import Header from '../components/Header';
import { css, Global } from '@emotion/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

interface Props {
	children?: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Global styles={globalStyles} />
			<aside></aside>
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};

export default HomeLayout;

const globalStyles = css({
	body: {
		fontFamily: 'Inter',
	},
});
