import React, { Component } from 'react';
import Header from './pageElements/header';
import Position from './pageElements/position';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // The following document defines the CV
      // it will eventually be called from somewhere else
      // We'll keep it here for now for development purposes
      cv: {
        meta: {},
        header: {
          name: "Rikk Hill",
          profile: "I am a software developer and Machine Learning specialist with a varied 15-year career in the tech sector.\n\nI like cheese.",
          webLinks: [
            {
              icon: 'github',
              href: 'https://github.com/rikkhill',
            },
            {
              icon: 'linkedin',
              href: 'https://www.linkedin.com/in/rikkhill/',
            },
            {
              icon: 'stack-overflow',
              href: 'https://stackoverflow.com/users/639659/r-hill',
            },

          ],
        },
        positions: [
          {
            company: "Social Finance Digital Labs",
            companyWebsite: "https://www.sfdl.org.uk/",
            title: "Digital Labs Fellow: Senior Data Scientist and Backend Developer",
            startDate: "Sept 2016",
            endDate: "Present",
            copy: "Doing cool things for the social sector, yo."
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="container">
        <Header { ...this.state.cv.header } />
        { this.state.cv.positions.map((c, i) =>
        <Position { ...c} key={i}/>
        )}
      </div>
    );
  }
}

export default App;
