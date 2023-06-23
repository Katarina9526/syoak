import { FC, ReactNode, SVGProps } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles } from '@emotion/react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

interface Props {
	to: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	children?: ReactNode;
}

const IconLink: FC<Props> = ({ to, icon: Icon, children }) => {
	return (
		<Link to={to} css={linkStyles}>
			<Icon />
			{children}
		</Link>
	);
};

export default IconLink;

const linkStyles = css({
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	...typography.link,
	fontWeight: 500,
	color: colors.darkGray,
	textDecoration: 'none',
});
