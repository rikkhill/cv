import React, { Component } from 'react';
import TagLink from './TagLink';

class TagBox extends Component {

  render() {

    const tags = this.props.tags.map((c, i) =>
      <TagLink
        icon={c.icon}
        name={c.name}
        key={i}
      />);

    return (
      <div className="container">
        {this.props.tags}
      </div>
    );
  }
}

export default TagBox;