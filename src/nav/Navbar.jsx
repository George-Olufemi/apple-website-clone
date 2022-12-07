import { Fragment } from 'react';

export const Navbar = () => {
	return (
		<Fragment>
			<nav className='bg-[#323233] h-[44px]'>
				<div className='mx-[220px] h-[44px]'>
					<div className="flex gap-[#24.75] justify-between items-center pt-[4px]">
						<div>
							<li className='h-[44px] p-[10px] list-none cursor-pointer'>
								<img src='/apple.png' alt='Apple Logo' />
							</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Store</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Mac</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>iPad</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>iPhone</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Watch</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>AirPods</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>TV & Home</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Only On Apple</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Accessories</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none text-[11.9px] pt-[9px] text-[#c2c2c2] hover:text-white cursor-pointer  hover:transition-all hover:duration-500 hover'>Support</li>
						</div>
						<div>
							<li className='h-[44px]  p-[10px] list-none cursor-pointer'>
								<img src='/search.png' alt='Search Icon' />
							</li>
						</div>
						<div>
							<li className='h-[44px] p-[10px] list-none cursor-pointer'>
								<img src='/cart.png' alt='Cart' />
							</li>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
