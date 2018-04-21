import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from "@fortawesome/fontawesome";
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(regular);

class Expandable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="row mt-2 ml-2">
        <div className="col-md-12">
          <span
            onClick={e =>
              this.setState((prevState) => ({ visible: !prevState.visible }))}
            className="pseudolink">
            <span className="icon-link">
              {this.state.visible ?
                <FontAwesomeIcon icon={['far', 'minus-square']} size='1x' /> :
                <FontAwesomeIcon icon={['far', 'plus-square']} size='1x' />}
            </span>
          </span>
          {' '}
          <strong>{this.props.header}</strong>
        </div>
        { this.state.visible ?
        <div className="ml-4 col-md-10">{this.props.copy}</div> : null }
      </div>
    );
  }
}

export default Expandable;