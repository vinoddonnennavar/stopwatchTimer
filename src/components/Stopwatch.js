import React, { Component } from 'react';
import './Stopwatch.css';

import Timer         from './Timer';
import Controls      from './Controls';

import Config        from '../constants/config';

function getDefaultState() {
  return {
    isRunning : false,
    time      : 0   
  }
}

class Stopwatch extends Component {

  constructor( props ) {
    super(props);
    this.state    = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time : time + extraTime });
  }

  start() {
    this.setState({
      isRunning : true 
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer( Config.updateInterval ) }, Config.updateInterval
      )
    });
  }

  stop() {
    this.setState({
      isRunning : false 
    }, () => {
      clearInterval(this.timerRef);
    });
  }

  reset() {
    this.setState(getDefaultState());
  }

  

  render() {

    const { isRunning, time } = this.state;

    return (
      <div className="Stopwatch">

        <h1>Stopwatch</h1>

        <Timer time={ time } />

        <Controls
          isRunning={ isRunning } 
          start={ () => this.start() }
          stop={ () => this.stop() }
          reset={ () => this.reset() }
        />

       
      </div>
    );
  }
}

export default Stopwatch;