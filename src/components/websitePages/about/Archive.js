import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../elements/Spinner';

class Archive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateNotFound: 'Datum onbekend',
			titleNotFound: 'Titel onbekend',
			descriptionNotFound: '<p>Beschrijving niet gevonden </p>'
		};
    }
    
	render() {

		const { archive } = this.props;
		const { dateNotFound, titleNotFound, descriptionNotFound } = this.state;

		if (!archive ) return <Spinner />
		if (archive) {
			return (
				// TODO: Implement pagination
				// TODO: All accordion items now slide out at the same time ><
				<div id="accordion">
					{
						archive.map((announcement, index) => (
							<div key={index} className="card">
								<div className="card-header">
									<h5>
										<a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
											{announcement.date ? announcement.date : dateNotFound} - {announcement.title ? announcement.title : titleNotFound}
										</a>
									</h5>
								</div>
								<div id="collapse1" className="collapse show">
									<div
										dangerouslySetInnerHTML={
											{__html: announcement.description ? announcement.description : descriptionNotFound}
										}
										className="card-body">	
									</div>
								</div>
							</div>
						))
					}
					
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	archive: state.session.archive
});

export default connect(mapStateToProps)(Archive);