import React, { Component } from 'react';

const withInterval = Base =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = { on: false };
      this.interval = null;
      this.startInterval = this.startInterval.bind(this);
      this.stopInterval = this.stopInterval.bind(this);
    }

    startInterval(cb, duration) {
      this.interval = setInterval(cb, duration);

      this.setState({ on: true });
    }

    stopInterval() {
      this.setState({ on: false });

      clearInterval(this.interval);
    }
    render() {
      const { on } = this.state;

      const { stopInterval, startInterval } = this;

      const through = { on, stopInterval, startInterval };

      return <Base {...this.props} {...through} />;
    }
  };

export default withInterval;
