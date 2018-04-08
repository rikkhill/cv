import React, { Component } from 'react';
import Expandable from './Expandable';

class ExpandableGroup extends Component {

  render() {

    const expandables = this.props.expandables.map((item, i) =>
      <Expandable key={i} {...item} />);

    return (
      <div>
        <h5 className="display-5">
          <strong>{this.props.title}</strong>
        </h5>
        {expandables}
      </div>
    );
  }
}

export default ExpandableGroup;