import logo from '../assets/images/opendesk-logo.png'
const Nav = () => {
    return (
			<section className="flex justify-between items-center h-[12vh] border border-b-[1px]-white">
				<div className="">
					<a href="#">
						<img src={logo} alt="opendeskLogo" />
					</a>
				</div>
			</section>
		);
}

export default Nav