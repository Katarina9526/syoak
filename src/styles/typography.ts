import { CSSObject } from '@emotion/react';
import { colors } from './colors';

export const typography = {
	h1: {
		fontSize: '3.75rem',
		lineHeight: '4.75rem',
		fontWeight: 900,
		color: colors.black,
		margin: '0 0 1.5rem',
	},
	h2: {
		fontSize: '3rem',
		lineHeight: '3.5rem',
		fontWeight: 900,
		color: colors.darkBlue,
		margin: '0 0 2.5rem',
	},
	h3: {
		fontSize: '1.25rem',
		lineHeight: 1.4,
		fontWeight: 'bold',
		color: colors.darkBlue,
		margin: '0 0 1rem',
	},
	link: {
		fontSize: '0.8125rem',
		lineHeight: '1.25rem',
	},
	button: {
		fontSize: '0.875rem',
		lineHeight: 'normal',
		fontWeight: 500,
		color: colors.white,
		border: 0,
	},
	subtitle1: {
		fontSize: '1.25rem',
		lineHeight: 1.4,
		color: colors.gray,
	},
	body1: {
		fontSize: '1rem',
		lineHeight: 1.5,
		color: colors.gray,
	},
	caption: {
		fontSize: '0.8rem',
		lineHeight: 1.751,
	},
} satisfies { [key: string]: CSSObject };
