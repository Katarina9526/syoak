import { CSSObject } from '@emotion/react';
import { colors } from './colors';

export const typography = {
	h2: {
		fontSize: '3rem',
		lineHeight: '3.5rem',
		fontWeight: 900,
		color: colors.darkBlue,
	},
	h3: {
		fontSize: '1.25rem',
		lineHeight: 1.4,
		fontWeight: 'bold',
		color: colors.darkBlue,
	},
	link: {
		fontSize: '0.8125rem',
		lineHeight: '1.25rem',
	},
	button: {
		fontSize: '0.875rem',
		lineHeight: 1.21,
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
