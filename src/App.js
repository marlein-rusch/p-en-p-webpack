import React from "react";
import PropTypes from "prop-types";

const App = ({ label = 'This will display if label is not defined' }) => (
    <div className="bg-light p-3">
        {label}
    </div>
);

App.propTypes = {
    label: PropTypes.string.isRequired,
};

export default App;
