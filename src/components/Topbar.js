import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { openMenu } from '../store/session/actions';
import capitalize from '../helpers/capitalize';
import replaceHyphensWithSpaces from '../helpers/replaceHyphensWithSpaces';

class TopBar extends Component {
	render() {
		const {
			isMobile,
			menuItems,
			onHamburgerClick
		} = this.props;

		const categoryFromUrl = window.location.pathname.replace(/^\/([^/]*).*$/, '$1');

		return (
			<div className="topbar">
				<div className="d-flex align-items-center p-2 p-lg-3">
					<Link className="logo" to="/">
						<div className="d-flex align-items-center">
							<div className="mr-3 mr-lg-4">
								<FontAwesomeIcon
									className={`text-primary font-size-${isMobile ? '3' : '2'}`}
									icon="palette"
								/>
							</div>
							<div>
								<h1 className="d-sm-none mb-0 frederickaFont h3">met Potlood en Penseel</h1>
								<h1 className="d-none d-sm-block mb-0 frederickaFont">met Potlood en Penseel</h1>
							</div>
						</div>
					</Link>
					{/* Hamburger menu icon on mobile */}
					<button
						className="btn d-lg-none ml-auto text-dark"
						onClick={onHamburgerClick}
					>
						<FontAwesomeIcon
							className="font-size-4"
							icon="bars"
						/>
					</button>
					{/* Menu items on desktop */}
					<div className="d-none d-lg-block ml-auto desktop-menu">
						<ul>
						{menuItems.map(menuItem => {
							return (
								<li key={menuItem.category} className="desktop-menu-dropdown">
								{/* TODO: Replace button with Link `} */}
									<Link 
										to={`/${menuItem.category}`}
										className={`drop-link ${categoryFromUrl === menuItem.category ? 'active' : ''}`}
									>
										{capitalize(replaceHyphensWithSpaces(menuItem.category))}
									</Link>
									<ul className="dropdown-content">
										{menuItem.subcategories.map(subcategory => (
											<li key={subcategory}>
												<Link to={`/${menuItem.category}/${subcategory}`}>
													{capitalize(replaceHyphensWithSpaces(subcategory))}
												</Link>
											</li>
										))}
									</ul>
								</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	onHamburgerClick: () => dispatch(openMenu()),
});

const mapStateToProps = state => ({
	isMobile: state.session.isMobile,
	menuItems: state.session.menuItems
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);