import React, { useState, useRef } from 'react'
import moment from 'moment';

class OutWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().zone(-60 * this.props.watch.timeZone).format('h:mm:ss'),
    };
  }
  tick() {
    this.setState({
      time: moment().zone(-60 * this.props.watch.timeZone).format('h:mm:ss'),
    });
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  remove(id){
    this.props.onRemove(id);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {

    return (
      <table className="tab">
          <tr key={this.props.watch.id}>
            <td>{this.props.watch.name}</td>
            <td>{this.state.time}</td>
            <td>
            <button key={this.props.watch.id} onClick={() => this.remove(this.props.watch.id)}>&#215;</button>
            </td>
          </tr>
      </table>);
  }
}

export default OutWatch;