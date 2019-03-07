import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import { loadVisits } from '../../redux/modules/visits/visits.middleware';
import client1 from '../../static/images/avatar/1.jpg';
import client2 from '../../static/images/avatar/2.jpg';
import client3 from '../../static/images/avatar/3.jpg';
import client4 from '../../static/images/avatar/4.jpg';

const images = [client1, client2, client3, client4];

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});



class VisitsPage extends Component {
  componentDidMount() {
    this.props.dispatch(loadVisits());
  }

  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map(value => (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={images[value]}
              />
            </ListItemAvatar>
            <ListItemText primary={`Visit ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}


VisitsPage.propTypes = {
  dispatch: PropTypes.func,
  visit: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
  {
    visit: state.visit,
  }
)

export default connect(mapStateToProps)(withStyles(styles)(VisitsPage));
