import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faChevronDown,
	faChevronRight,
	faPalette,
	faTimes
} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { loadArchive, loadMuseums, loadAnnouncements } from './store/session/actions';
import Topbar from './components/Topbar';
import Main from './components/Main';
import MobileMenu from './components/MobileMenu';

import './styling/index.scss';
import './helpers/setMobileInRedux';

library.add(
	faChevronDown,
	faChevronRight,
	faPalette,
	faBars,
	faTimes
)

export class App extends Component {

	componentDidMount() {

		const {
			loadAnnouncements,
			loadArchive,
			loadMuseums
		} = this.props;

		const allAnnouncementsArray = [];
		const announcementsArray = [];
		const archiveArray = [];
		const oneYearAgo = new Date();
		oneYearAgo.setFullYear( oneYearAgo.getFullYear() - 1 );
		
		fetch('http://potloodenpenseel.test/wp-json/wp/v2/announcements')
			.then(response => response.json())
			.then(json => {
				// .acf = part of the json response that was added by the "ACF (Advanced Custom Fields) to REST API" plugin
				if (json.map) {json.map(announcements => allAnnouncementsArray.push(announcements.acf))};
				return allAnnouncementsArray;
			})
			.then(
				allAnnouncementsArray => {
					// Announcements that are more than 1 year old are pushed into an archive
					allAnnouncementsArray.forEach(announcement => {
						if (new Date(announcement.date).getTime() > new Date(oneYearAgo).getTime()) {
							announcementsArray.push(announcement)
						} else {
							archiveArray.push(announcement)
						}
					})
					return null
				}
			)
			.then(
				_ => {
					// Redux actions
					loadAnnouncements(announcementsArray);
					loadArchive(archiveArray);
				}
			)
					
		fetch('http://potloodenpenseel.test/wp-json/wp/v2/museums')
			.then(response => response.json())
			.then(json => {
				const museumArray = [];		
				if (json.map) {json.map(museum => museumArray.push(museum.acf))};
				return museumArray;
			})
			.then(museumArray => loadMuseums(museumArray));
	}

	render() {
		return (
			<div>
				<Route path='/' component={Topbar} />
				<Main/>
				<MobileMenu/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	news: state.session.news
});

const mapDispatchToProps = dispatch => {
	return {
	  	loadArchive: (apiData) => dispatch(loadArchive(apiData)),
	  	loadMuseums: (apiData) => dispatch(loadMuseums(apiData)),
	  	loadAnnouncements: (apiData) => dispatch(loadAnnouncements(apiData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);