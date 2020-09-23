import React, { Component } from 'react';
import './Controls.css';
import PropTypes from 'prop-types';

class Controls extends Component {

  static proptTypes = {
    isRunning  : PropTypes.bool,
    start      : PropTypes.func.isRequired,
    stop       : PropTypes.func.isRequired,
    reset      : PropTypes.func.isRequired
  };

  static defaultProps = {
    isRunning : false
  };

  render() {
    const { isRunning, start, stop, reset } = this.props;

    return (
      <div className="Controls">
        { !isRunning ?
            <button
              onClick={ start }
              className="Controls__button"
              ref="startBtn" > Start </button>
          : null }

        { isRunning ?
          <button
            onClick={ stop }
            className="Controls__button"
            ref="stopBtn" > Stop </button>
        : null }

        <button
          onClick={ reset }
          disabled={ isRunning }
          className="Controls__button"
          ref="resetBtn" > Reset </button>

      </div>
    );
  }
}

export default Controls;