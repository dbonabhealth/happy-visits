import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class VisitsPage extends Component {
  render() {
    const { visit } = this.props;
    return (
      <ul>
        {visit.visits.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}


VisitsPage.propTypes = {
  visit: PropTypes.array,
};

const mapStateToProps = (state) => (
  {
    visit: state.visit,
  }
)

export default connect(mapStateToProps)(VisitsPage);
