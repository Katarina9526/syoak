import { FC, SVGProps } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import IconLink from '../elements/IconLink';
import UserIcon from '../icons/UserIcon';
import SendIcon from '../icons/SendIcon';

const Header = () => {
	return (
		<header css={headerStyles}>
			<nav css={navStyles}>
				{generalNavLinks.map((link) => (
					<Link key={link.name} to={link.href} css={linkStyles}>
						{link.name}
					</Link>
				))}
			</nav>
			<nav css={navStyles}>
				{userNavLinks.map((link) => (
					<IconLink key={link.name} to={link.href} icon={link.icon}>
						{link.name}
					</IconLink>
				))}

				<Link to="/" css={outlinedLinkStyles}>
					{signUpText}
				</Link>
			</nav>
		</header>
	);
};

export default Header;

interface GeneralNavLink {
	name: string;
	href: string;
}

const generalNavLinks: GeneralNavLink[] = [
	{
		name: 'Services',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/',
	},
	{
		name: 'About us',
		href: '/',
	},
	{
		name: 'Blog',
		href: '/',
	},
];

interface UserNavLink extends GeneralNavLink {
	icon: FC<SVGProps<SVGSVGElement>>;
}

const userNavLinks: UserNavLink[] = [
	{
		name: 'Log in',
		href: '/',
		icon: UserIcon,
	},
	{
		name: 'Contact us',
		href: '/',
		icon: SendIcon,
	},
];

const signUpText = 'Sign up';

const headerStyles = css({
	display: 'flex',
	justifyContent: 'space-between',
});

const navStyles = css({
	display: 'flex',
	alignItems: 'center',
	gap: '2.75rem',
});

const linkStyles = css({
	...typography.link,
	fontWeight: 'bold',
	color: colors.darkGray,
	textDecoration: 'none',
});

const outlinedLinkStyles = css({
	...typography.button,
	fontWeight: 500,
	color: colors.darkGray,
	textDecoration: 'none',
	border: `2px solid ${colors.blue}`,
	borderRadius: '0.3125rem',
	padding: 'calc(0.5rem - 2px) calc(1.5rem - 2px)',
	boxSizing: 'border-box',
});
