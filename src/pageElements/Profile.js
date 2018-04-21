import React, { Component } from 'react';
import ExpandableGroup from './ExpandableGroup';


class Profile extends Component {

  render() {

    return (
      <div >
        <h4 className="display-5 ml-2">
          <strong>Profile</strong>
        </h4>
        <div className="row mt-2 ml-2 mb-3 display-linebreak">
          {this.props.copy.split("\n").map((c, i) =>
            <p key={i}>{c}</p>)}
          <ExpandableGroup
            title="Unique Selling Points"
            expandables={this.props.usps} />
        </div>
      </div>
    );
  }
}

export default Profile;