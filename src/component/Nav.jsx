import logo from '../assets/images/opendesk-logo.png'
const Nav = () => {
    return (
			<section className="flex justify-between items-center h-[12vh] border border-b-[1px]-white">
				<div className="">
					<div className="">
						<a href="#">
							<img src={logo} alt="opendeskLogo" />
						</a>
					</div>
					<ul>
						<li>
							<a href="#">Furniture</a>
						</li>
						<li>
							<a href="#">Workspaces</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
					</ul>
				</div>
			</section>
		);
}

export default Nav