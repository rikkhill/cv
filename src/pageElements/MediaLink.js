import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from "@fortawesome/fontawesome";
import brands from '@fortawesome/fontawesome-free-brands';

// If the platform in question isn't in brands, we're buggered...
fontawesome.library.add(brands);

class MediaLink extends Component {

  render() {
    return (
      <span>
        <a
          href={this.props.href}
          className="text-light"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={['fab', this.props.icon]}
            size='2x'
          />
        </a>
        {'  '}
      </span>
    );
  }
}

export default MediaLink;