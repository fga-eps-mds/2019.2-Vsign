import React, { Component } from 'react'

export default class ScriptProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      percent: 0,
      color: '#3385ff'
    };
    this.decline = this.decline.bind(this);
    this.increase = this.increase.bind(this);
  }

  changePercent(nextPercent) {
    const percent = nextPercent < 0 ? 0 : nextPercent > 100 ? 100 : nextPercent;
    this.setState({
      percent,
      status: percent === 100 ? 'success' : null,
      color: percent === 100 ? '#52c41a' : '#3385ff'
    });
  }

  decline() {
    const stepSize = this.props.stepSize
    this.changePercent(this.state.percent - stepSize);
  }

  increase() {
    const stepSize = this.props.stepSize
    this.changePercent(this.state.percent + stepSize);
  }

  render() {
    const {
      percent,
      color,
      status
    } = this.state;
    const style = {
      width: `${percent}%`,
      color
    };
    return (
      <div class="progress" >
        <div class="progress-bar" role="progressbar" style={style} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" />
      </div>
    );
  }
}