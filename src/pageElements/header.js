import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-3 mb-2">
        <div className="row border-bottom mb-1">
          <div className="col-sm-8">
            <h1>{this.props.name}</h1>
          </div>
          <div className="col-sm-4">
          {this.props.identityItems.map((c, i) =>
            <div className="row" key={i}>
              <span className="text-right">
                {c}
              </span>
            </div>
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