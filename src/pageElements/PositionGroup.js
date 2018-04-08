import React, { Component } from 'react';
import Position from './Position'

class Grouping extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const positions = this.props.positions.map((position, i) =>
      <Position key={i} { ...position } />);

    return (
      <div >
        <h4 className="display-5 ml-2">
          <strong>Experience</strong>
        </h4>
        <div className="ml-4">
          {positions}
        </div>
      </div>
    );
  }
}

export default Grouping;