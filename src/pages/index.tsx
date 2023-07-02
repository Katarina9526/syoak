import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HomeLayout from '../layouts/HomeLayout';
import { css } from '@emotion/react';
import SplitScreenArticle from '../components/SplitScreenArticle';
import {
	learnMoreText,
	mainSubtitleText,
	mainTitleText,
	pageDescription,
	pageTitle,
	syoakSolutionSectionData,
} from '../content/homeContent';
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import ArrowIcon from '../icons/ArrowIcon';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<HomeLayout>
			<section css={introSectionStyles}>
				<h1 css={mainTitleStyles}>{mainTitleText}</h1>
				<p css={mainSubtitleStyles}>{mainSubtitleText}</p>
				<button css={learnMoreButtonStyles}>
					<ArrowIcon /> {learnMoreText}
				</button>
			</section>

			<section>
				<h2 css={sectionTitleStyles}>{syoakSolutionSectionData.title}</h2>
				<p css={sectionSubtitleStyles}>{syoakSolutionSectionData.subtitle}</p>

				{syoakSolutionSectionData.articles.map((section) => (
					<SplitScreenArticle
						key={section.title}
						title={section.title}
						description={section.description}
						imageComponent={section.imageComponent}
						reverseOrder={section.reverseOrder}
					/>
				))}
			</section>
		</HomeLayout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>{pageTitle}</title>
		<meta name="description" content={pageDescription} />
		<meta property="og:title" content={pageTitle} />
		<meta property="og:description" content={pageDescription} />
	</>
);

const introSectionStyles = css({
	marginBottom: '9rem',
});

const mainTitleStyles = css({
	...typography.h1,
});

const mainSubtitleStyles = css({
	...typography.subtitle1,
	maxWidth: '33.8125rem',
	marginBottom: '1.5rem',
});

const learnMoreButtonStyles = css({
	...typography.button,
	backgroundColor: colors.blue,
	padding: '0.75rem 1.06rem 0.69rem',
});

const sectionTitleStyles = css({
	...typography.h2,
	maxWidth: '40.8125rem',
	marginBottom: '2.5rem',
});

const sectionSubtitleStyles = css({
	...typography.subtitle1,
	maxWidth: '40.8125rem',
	marginBottom: '7.75rem',
});
