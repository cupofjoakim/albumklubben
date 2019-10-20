import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleDriveService from '../services/GoogleDriveService';

const WeekContext = React.createContext();

export class WeekProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekRows: null,
    };
  }

  async componentDidMount() {
    const weekRows = await GoogleDriveService.getWeekRows();
    this.setState({ weekRows });
  }

  render() {
    const { children } = this.props;
    const { weekRows } = this.state;
    return (
      <WeekContext.Provider value={{ weekRows }}>
        {children}
      </WeekContext.Provider>
    );
  }
}

WeekProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeekContext;
