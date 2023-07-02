import { FC, SVGProps } from 'react';

const ArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
	return (
		<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlnsXlink="http://www.w3.org/2000/svg" {...props}>
			<path
				id="Arrow"
				d="M9.49889 1.03326C9.51726 0.757729 9.30879 0.519476 9.03326 0.501107L4.54323 0.201772C4.2677 0.183403 4.02944 0.391874 4.01107 0.667405C3.99271 0.942935 4.20118 1.18119 4.47671 1.19956L8.46785 1.46563L8.20177 5.45677C8.1834 5.7323 8.39187 5.97056 8.66741 5.98893C8.94294 6.00729 9.18119 5.79882 9.19956 5.52329L9.49889 1.03326ZM1.32925 8.37629L9.32925 1.37629L8.67075 0.623712L0.670748 7.62371L1.32925 8.37629Z"
				fill="white"
			/>
		</svg>
	);
};

export default ArrowIcon;
