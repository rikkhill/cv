import React, { Component } from 'react';
import MediaLink from './mediaLink';

class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="container mt-3 mb-2">
        <div className="row border-bottom mb-1">
          <div className="col-sm-8">
            <h1>{this.props.name}</h1>
          </div>
          <div className="col-sm-4">
          {this.props.webLinks.map((c, i) =>
            <MediaLink
              icon={c.icon}
              href={c.href}
              key={i}
            />
            )}
          </div>
        </div>
        <div className="row mt-2 ml-1 mb-3 display-linebreak">
          {this.props.profile}
        </div>
      </div>
    );
  }
}

export default Header;