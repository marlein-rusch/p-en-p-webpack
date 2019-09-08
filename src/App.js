import React, { Component } from "react";
import { connect } from 'react-redux';

import { doTest } from './store/session/actions';
import "./styling/main.scss";

class App extends Component {

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        const { something } = this.props;

        return (
            <div className="bg-light p-3">
                <div className="pb-2">REDUX STATE TEST: {something}</div>
                <button 
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Redux state change test
                </button>
                <div className="test-style">
                    Testing styles
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	something: state.session.something
});

const mapDispatchToProps = dispatch => ({
	handleClick: () => { dispatch(doTest("This is working!")); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
