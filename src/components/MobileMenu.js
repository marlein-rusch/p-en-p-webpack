import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { closeMenu } from '../store/session/actions';
import capitalize from '../helpers/capitalize';
import replaceHyphensWithSpaces from '../helpers/replaceHyphensWithSpaces';

class MobileMenu extends Component {
	render() {
        const {
            menuItems,
            mobileMenuIsOpen,
            onBackgroundClick,
            onMenuItemClick
        } = this.props;

		return (
            <>
                <div 
                    className={`${`account-menu ${mobileMenuIsOpen ? 'is-open' : ''}`}`}
                    onClick={onBackgroundClick}
                >
                    <div className="p-3 d-flex justify-content-between">
                        <ul className="list-unstyled pl-0">
                            {
                                menuItems.map(menuItem => (
                                    <li key={menuItem.category} className="h5">
                                        <Link
                                            className="text-dark"
                                            to={`/${menuItem.category}`}
                                            onClick={onMenuItemClick}
                                        >
                                            {capitalize(replaceHyphensWithSpaces(menuItem.category))}
                                            <FontAwesomeIcon
                                                className="text-dark font-size-5 ml-2"
                                                icon="chevron-right"
                                            />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            type="button"
                            className="btn p-0 align-self-start"
                            onClick={onMenuItemClick}   
                            >
                            <FontAwesomeIcon
                                className="text-dark"
                                icon="times"
                            />
                        </button>
                    </div>
                </div>
                <button
                    type="button"
                    className={`${`account-menu-bg ${mobileMenuIsOpen ? 'is-open' : ''}`}`}
                    onClick={onBackgroundClick}
                />
                <button
                    type="button"
                    className={`${`account-menu-backdrop ${mobileMenuIsOpen ? 'is-open' : ''}`}`}
                    onClick={onBackgroundClick}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    menuItems: state.session.menuItems,
	mobileMenuIsOpen: state.session.mobileMenuIsOpen
});

const mapDispatchToProps = dispatch => ({
	onBackgroundClick: () => dispatch(closeMenu()),
	onMenuItemClick: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
