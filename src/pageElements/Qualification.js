import React, { Component } from 'react';

class Qualification extends Component {

  render() {
  return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-3">
            <strong>{this.props.level}</strong>
          </div>
          <div className="col-md-6">
            <strong>{this.props.subject}</strong>
          </div>
          <div className="col-md-3">
            {this.props.start} - {this.props.end}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <a href={this.props.institutionURL}>
              {this.props.institution}
            </a>
          </div>
          <div className="col-md-3">
            &nbsp;
          </div>
          <div className="col-md-3">
            {this.props.grade}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 ml-4">
            <p>{this.props.copy}</p>
            <p>{this.props.dissertation}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Qualification;