import React, { Component } from 'react';
import ExpandableGroup from './ExpandableGroup';
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
        <h4 className="display-5">
          <strong>Profile</strong>
        </h4>
        <div className="row mt-2 ml-2 mb-3 display-linebreak">
          {this.props.profile.split("\n").map((c, i) =>
            <p key={i}>{c}</p>)}
          <ExpandableGroup
            title="Unique Selling Points"
            expandables={this.props.usps} />
        </div>
      </div>
    );
  }
}

export default Header;