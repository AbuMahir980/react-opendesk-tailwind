import logo from '../assets/images/opendesk-logo.png'
const Nav = () => {
    return (
			<section className="flex justify-between items-center h-[12vh] border border-b-[1px]-white">
				<div className="flex justify-start items-center h-4">
					<div className="pt-[18px] pr-4 pb-[15px] pl-[37px] mr-10">
						<a href="#">
							<img src={logo} alt="opendeskLogo" className="" />
						</a>
					</div>
					<ul className="flex justify-between items-center gap-10 pt-[15px] px-[30px] pb-[1.20rem]">
						<li>
							<a href="#" className="text-[#777778] text-base">
								Furniture
							</a>
						</li>
						<li>
							<a href="#" className="text-[#777778] text-base">
								Workspaces
							</a>
						</li>
						<li>
							<a href="#" className="text-[#777778] text-base">
								Blog
							</a>
						</li>
					</ul>
				</div>
			</section>
		);
}

export default Nav