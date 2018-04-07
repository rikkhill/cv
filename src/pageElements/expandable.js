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
          <span>{this.props.header}</span>
          {' '}
          <span
            onClick={e =>
              this.setState((prevState) => ({ visible: !prevState.visible }))}
            className="pseudolink"
          >
            <pre style={{display: "inline"}}>
              {this.state.visible ? '[-]' : '[+]'}
            </pre>
          </span>
        </div>
        { this.state.visible ?
        <div>{this.props.copy}</div> : null }
      </div>
    );
  }
}

export default Expandable;