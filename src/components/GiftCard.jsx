import { Fragment } from 'react';

export const GiftCard = () => {
  return ( 
    <Fragment>
      <div className="bg-[#010127] h-[736px] mt-[10px]">
        <div className="flex justify-center items-center py-[68px]">
          <div>
            <img src="/giftcard.png" alt="Apple Giftcard" />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center items-center text-center">
          <div>
            <h1 className="text-[#F5F5F7] font-[700] text-[52px] leading-[60px] p-[7px]">Give WOW.</h1>
            <p className="text-[#F5F5F7] font-[300] text-[28px] leading-[31px] tracking-wide p-[7px]">This holiday season, find the perfect<br /> gift for everyone on your list.</p>
            <div className="flex items-center cursor-pointer justify-center p-[7px]">
								<div>
									<p className="text-[#0066CC] text-[21px] hover:underline leading-[29px] font-light">Shop the gift guide</p>
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
    </Fragment>
  );
}