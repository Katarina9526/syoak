import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { colors } from '../styles/colors';
import CloseIcon from '../icons/CloseIcon';
import { typography } from '../styles/typography';
import { SplitScreenArticleProps } from '../components/SplitScreenArticle';

export const pageTitle = 'Homepage';
export const pageDescription =
	'SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil, natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a growing base of industrial and residential customers through transmission pipelines.';

const engineOverlayStyles = css({
	display: 'flex',
	gap: '1.01rem',
	position: 'absolute',
	top: '20%',
	right: 0,
	padding: '0.87rem 0.38rem 1rem 0.87rem',
	backgroundColor: colors.white,
	borderRadius: '0.3125rem',
	boxShadow: '0 0 0.25rem 0 rgba(0, 0, 0, 0.15)',
});

const engineIconStyles = css({
	marginTop: '0.3125rem',
});

const engineOverlayTextStyles = css({
	...typography.caption,
	maxWidth: '12.5rem',
	color: colors.captionGray,
});

interface SyoakSolutionSectionData {
	title: string;
	subtitle: string;
	articles: SplitScreenArticleProps[];
}

export const syoakSolutionSectionData: SyoakSolutionSectionData = {
	title: 'SYOAK Solution',
	subtitle:
		'SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil, natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a growing base of industrial and residential customers through transmission pipelines.',
	articles: [
		{
			title: 'Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk',
			description:
				'We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			imageComponent: (
				<>
					<StaticImage src="../images/engine.png" alt="engine" />
					<div css={engineOverlayStyles}>
						<CloseIcon css={engineIconStyles} />
						<span css={engineOverlayTextStyles}>
							Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk
						</span>
					</div>
				</>
			),
		},
		{
			title: 'Our bussines takes the industry of oil and gass to a new level.',
			description:
				'We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			imageComponent: <StaticImage src="../images/gas-pump.png" alt="Gas pump" />,
			reverseOrder: true,
		},
		{
			title: 'Syoak serves more than 2,500 petrol stations globally',
			description:
				'We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			imageComponent: <StaticImage src="../images/fuel-truck.png" alt="Fuel truck" />,
		},
	],
};
