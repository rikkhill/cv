import React, { Component } from 'react';

class Expandable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.props.header}
          <span onClick={e => this.setState({ visible: true })}> [+]</span>
        </div>
        { this.state.visible ?
        <div>{this.props.copy}</div> : null }
      </div>
    );
  }
}

export default Expandable;