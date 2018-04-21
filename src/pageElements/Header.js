import React, { Component } from 'react';
import MediaLink from './MediaLink';

class Header extends Component {

  render() {
    return (
      <div className="container mt-3 mb-2">
        <div className="row border-bottom mb-1 pt-3 bg-secondary text-light">
          <div className="col-md-8">
            <h1 className="display-4">{this.props.name}</h1>
          </div>
          <div className="col-md-4">
          {this.props.webLinks.map((c, i) =>
            <MediaLink
              icon={c.icon}
              href={c.href}
              key={i}
            />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;