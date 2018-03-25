import React, { Component } from 'react';
import Expandable from './expandable';

class Position extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container border rounded">
        <div className="row mt-2">
          <div className="col-xs-6 col-md-6">
            <strong>{this.props.title}</strong>
          </div>
          <div className="col-xs-3 col-md-3">
            <a href={this.props.companyWebsite}>
              {this.props.company}
            </a>
          </div>
          <div className="col-xs-3 col-md-3 text-right">
            {`${this.props.startDate} - ${this.props.endDate}`}
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="container col-xs-10 col-md-10 ml-2">
            {this.props.copy}
          </div>
        </div>
        <div className="row">
          <Expandable
            header="Doing Cool Things"
            copy="Here are some of the amazing cool things that Rikk has done..." />
        </div>
      </div>
    );
  }
}

export default Position;