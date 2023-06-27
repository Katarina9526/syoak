import { css } from '@emotion/react';
import { FC } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

interface Props {
	title: string;
	description: string;
	imageComponent: JSX.Element;
	reverseOrder?: boolean;
}

interface ColumnStyleProps {
	reverseOrder?: boolean;
}

const SplitScreenSection: FC<Props> = ({ title, description, imageComponent, reverseOrder }) => {
	return (
		<section css={sectionStyles}>
			<div css={columnStyles}>
				<h3 css={titleStyles}>{title}</h3>
				<p css={descriptionStyles}>{description}</p>
			</div>
			<div css={columnStyles}>{imageComponent}</div>
		</section>
	);
};

export default SplitScreenSection;

const sectionStyles = ({ reverseOrder }: ColumnStyleProps) =>
	css({
		display: 'flex',
		flexDirection: reverseOrder ? 'row-reverse' : undefined,
		alignItems: 'center',
	});

const columnStyles = css({
	flex: '1',
});

const titleStyles = css({
	...typography.h3,
	color: colors.darkBlue,
});

const descriptionStyles = css({
	...typography.body1,
	color: colors.gray,
});
