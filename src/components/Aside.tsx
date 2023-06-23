import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from '../styles/colors';

const Aside = () => {
	return (
		<aside css={asideStyles}>
			<StaticImage
				src="../images/fullLogo.svg"
				alt={logoAltText}
				loading="eager"
				width={100}
				placeholder="blurred"
			/>
		</aside>
	);
};

export default Aside;

const logoAltText = 'SYOAK logo';

const asideStyles = css({
	width: '12.5rem',
	borderRight: `1px solid ${colors.borderGray}`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});
