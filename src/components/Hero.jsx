import { Fragment } from 'react';

export const Hero = () => {
	return (
		<Fragment>
			<div className='bg-[url(&#39;/figure.png&#39;)] h-[680px] object-cover bg-center bg-no-repeat'>
				<div className="flex justify-center text-center pt-[60px]">
					<div>
						<h1 className="font-[700] text-[52px] leading-[60px] font-[Helvetica Neue] tracking-wide pb-1 text-[#1D1D1F]">iPhone 14</h1>
						<p className="font-[Helvetica Neue] font-[400] text-[30px] leading-[31px] text-[#1D1D1F]">Big and bigger</p>
						<div className="m-[14.61px] flex justify-center items-center gap-[45px]">
							<div className="flex items-center cursor-pointer">
								<div>
									<p className="text-[#0066CC] text-[21px] hover:underline leading-[29px] font-light">Learn more</p>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#0066CC] mt-[4.3px]">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</div>
							</div>
							{/*  */}
							<div className="flex items-center cursor-pointer">
								<div>
									<p className="text-[#0066CC] text-[21px] hover:underline leading-[29px] font-light">Buy</p>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#0066CC] mt-[4.3px]">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
