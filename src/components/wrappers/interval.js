import React, { Component } from 'react';

const withInterval = Base =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = { on: props.on || false };
      this.interval = null;
      this.startInterval = this.startInterval.bind(this);
      this.stopInterval = this.stopInterval.bind(this);
      this.toggleInterval = this.toggleInterval.bind(this);
    }

    setInt(cb, dur) {
      this.interval = setInterval(cb, dur);
    }
    clearInt() {
      clearInterval(this.interval);
    }

    startInterval(cb, dur) {
      this.setState({ on: true }, () => this.setInt(cb, dur));
    }

    toggleInterval(cb, dur) {
      this.state.on ? this.stopInterval() : this.startInterval(cb, dur);
    }

    stopInterval() {
      this.setState({ on: false }, this.clearInt);
    }
    render() {
      const { on } = this.state;

      const { stopInterval, startInterval, toggleInterval } = this;

      const through = { on, stopInterval, toggleInterval, startInterval };

      return <Base {...this.props} {...through} />;
    }
  };

export default withInterval;
