import * as React from 'react';
import Header from '../components/Header';
import { css, Global } from '@emotion/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import Aside from '../components/Aside';

interface Props {
	children?: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
	return (
		<div css={layoutStyles}>
			<Global styles={globalStyles} />
			<Aside />
			<div css={mainWrapper}>
				<Header />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default HomeLayout;

const layoutStyles = css({
	minHeight: '100vh',
	display: 'flex',
});

const globalStyles = css({
	body: {
		margin: 0,
		fontFamily: 'Inter',
	},
});

const mainWrapper = css({
	flex: 1,
});
