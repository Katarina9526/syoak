import { FC, SVGProps } from 'react';

const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
	return (
		<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlnsXlink="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M12.8 0.740413L12.058 0L6.4 5.64716L0.742024 0L0 0.740413L5.65798 6.38762L0 12.0344L0.742024 12.7748L6.4 7.12801L12.058 12.7748L12.8 12.0344L7.14163 6.38762L12.8 0.740413Z"
				fill="#FF6900"
			/>
		</svg>
	);
};

export default CloseIcon;
