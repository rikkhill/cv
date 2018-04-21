import React, { Component } from 'react';

class Section extends Component {

  render() {

    const items = this.props.items.map((c, i) =>
      React.createElement(this.props.component, {
        key: i,
        ...c,
      }));

    return (
      <div >
        <h4 className="display-5 ml-2">
          <strong>{this.props.title}</strong>
        </h4>
        <div className="ml-4">
          {items}
        </div>
      </div>
    );
  }
}

export default Section;