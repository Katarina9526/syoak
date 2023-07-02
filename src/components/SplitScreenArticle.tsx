import { css } from '@emotion/react';
import { FC } from 'react';
import { typography } from '../styles/typography';

export interface SplitScreenArticleProps {
	title: string;
	description: string;
	imageComponent: JSX.Element;
	reverseOrder?: boolean;
}

const SplitScreenArticle: FC<SplitScreenArticleProps> = ({ title, description, imageComponent, reverseOrder }) => {
	return (
		<article css={sectionStyles(reverseOrder)}>
			<div css={columnStyles}>
				<h3 css={titleStyles}>{title}</h3>
				<p css={descriptionStyles}>{description}</p>
			</div>
			<div css={imageColumnStyles(reverseOrder)}>{imageComponent}</div>
		</article>
	);
};

export default SplitScreenArticle;

const sectionStyles = (reverseOrder?: boolean) =>
	css({
		display: 'flex',
		flexDirection: reverseOrder ? 'row-reverse' : undefined,
		gap: '1rem',
		alignItems: 'center',
		marginBottom: '9rem',
	});

const columnStyles = css({
	flex: '1',
});

const imageColumnStyles = (reverseOrder?: boolean) =>
	css(columnStyles, {
		position: 'relative',
		display: 'flex',
		justifyContent: !reverseOrder ? 'flex-end' : undefined,
	});

const titleStyles = css({
	...typography.h3,
	marginBottom: '1rem',
});

const descriptionStyles = css({
	...typography.body1,
});
