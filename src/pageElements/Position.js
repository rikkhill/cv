import React, { Component } from 'react';
import ExpandableGroup from './ExpandableGroup';

class Position extends Component {

  render() {
    return (
      <div className="container mt-4">
        <div className="row bg-dark text-light">
          <div className="col-md-12 pt-3">
            <h5>
              <strong>
                {this.props.title}
              </strong>
            </h5>
            <h6>
              <strong>
                {this.props.subtitle}
              </strong>
            </h6>
          </div>
        </div>
        <div className="row pt-2 pb-1 border-bottom bg-dark text-light">
          <div className="col-md-8">
            <a
              href={this.props.companyWebsite}
              target='_blank'
            >
              {this.props.company}
            </a>
          </div>
          <div className="col-md-4 text-right">
            {`${this.props.startDate} - ${this.props.endDate}`}
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-10">
            {this.props.copy}
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
          { this.props.projectsAndAchievements.length > 0 ?
            <ExpandableGroup
              title="Projects and Achievements"
              expandables={this.props.projectsAndAchievements} /> :
              '' }
          </div>
        </div>
      </div>
    );
  }
}

export default Position;