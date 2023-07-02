import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HomeLayout from '../layouts/HomeLayout';
import { css } from '@emotion/react';
import SplitScreenArticle from '../components/SplitScreenArticle';
import { pageDescription, pageTitle, syoakSolutionSectionData } from '../content/homeContent';
import { typography } from '../styles/typography';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<HomeLayout>
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
