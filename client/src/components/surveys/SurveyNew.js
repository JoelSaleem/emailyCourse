// SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	/*	constructor(props) {
		super(props);

		this.state = { showFormReview: true };
	} */ // Usually how it's done in React

	// create-react-app allows us to use the following

	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// Note: reduxForm default: destroyOnUnmount: true
// so it destroys surveyForm state
export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
