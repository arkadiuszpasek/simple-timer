import React from 'react';
import { connect } from 'react-redux';

import TimeDisplay from './TimeDisplay';
import TimesGrid from './TimesGrid';
import Reset from './Reset';
import { timeTick } from '../../actions';

class Timer extends React.Component {
  componentDidMount() {
    const { timeTick } = this.props;
    this.interval = setInterval(() => timeTick(), 1000);
  }

  componentDidUpdate(prevProps) {
    const { time, audio } = this.props;
    if (prevProps.time.hours === time.hours && 
      prevProps.time.minutes === time.minutes &&
      prevProps.time.seconds === time.seconds) return;
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      audio.play();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div className="container text-center">
        <TimeDisplay />
        <TimesGrid />
        <Reset />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.time,
  audio: state.audio,
});

export default connect(mapStateToProps, {
  timeTick,
})(Timer);