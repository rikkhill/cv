import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from "@fortawesome/fontawesome";

class TagLink extends Component {

  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={this.props.icon}
          size='2x'
        />
      </div>
    );
  }
}

export default TagLink;