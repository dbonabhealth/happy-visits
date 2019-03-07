import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class VisitsPage extends Component {
  render() {
    const { visit } = this.props;
    return (
      <div className="container">
      <ul className="visit">
        {visit.visits.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
      </div>
    );
  }
}


VisitsPage.propTypes = {
  visit: PropTypes.object,
};

const mapStateToProps = (state) => (
  {
    visit: state.visit,
  }
)

export default connect(mapStateToProps)(VisitsPage);
