import React, { Component } from 'react';
import Header from './pageElements/Header';
import PositionGroup from './pageElements/PositionGroup';
import Section from './pageElements/Section';
import Qualification from './pageElements/Qualification';
import Profile from './pageElements/Profile';

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
        profile: {
          copy: "I am a software developer and Machine Learning specialist with a varied 15-year career in the tech sector.\n",
          usps: [ // unique selling points!
            {
              header: "Academic Machine Learning background alongside heavy commercial development experience",
              copy: "A lot of Machine Learning engineers and \"data scientists\" tend to be either academics with shallow dev experience, or career-developers with a superficial Machine Learning background. I am the best of both worlds. As a full-blooded developer, I understand the nuts and bolts of building good software, while my academic background lets me understand theoretical aspects of Machine Learning to considerable technical depth.",
            },
            {
              header: "A broad set of experience across many types of problem domains",
              copy: "Having worked in a lot of different environments on a lot of different kinds of problem",
            },
            {
              header: "A strong jawline",
              copy: "Not actually that helpful, but I need a third thing as a placeholder",
            }
          ],
        },
        positions: [
          {
            company: "Social Finance Digital Labs",
            companyWebsite: "https://www.sfdl.org.uk/",
            title: "Digital Labs Fellow",
            subtitle: "Senior Data Scientist and Backend Developer",
            startDate: "Sept 2016",
            endDate: "Present",
            copy: "Doing cool things for the social sector, yo.",
            projectsAndAchievements: []
          },
          {
            company: "NET-A-PORTER",
            companyWebsite: "https://www.net-a-porter.com/",
            title: "Software Developer",
            subtitle: "Full-stack developer on in-house logistics systems",
            startDate: "Dec 2013",
            endDate: "Sept 2015",
            copy: "Selling expensive clothes to people",
            projectsAndAchievements: []
          },
          {
            company: "NET-A-PORTER",
            companyWebsite: "https://www.net-a-porter.com/",
            title: "Application Support Developer",
            subtitle: "Application Support Team",
            startDate: "Sept 2011",
            endDate: "Dec 2013",
            copy: "Helping people sell expensive clothes to people",
            projectsAndAchievements: []
          },
          {
            company: "UKMail",
            companyWebsite: "https://ukmail.com/",
            title: "Senior Technical Analyst",
            subtitle: "Systems and Database Administrator",
            startDate: "Jul 2008",
            endDate: "Sept 2011",
            copy: "Moving boxes from one place to another",
            projectsAndAchievements: []
          },
        ],
        "qualifications": [
          {
            "level": "Bachelor of Science",
            "subject": "Economics and Mathematical Sciences",
            "grade": "First Class Honours",
            "institution": "The Open University",
            "institutionURL": "https://www.open.ac.uk",
            "start": "2009",
            "end": "2015",
            "copy": "I completed this degree on a part-time basis over six years while working full time in my contemporaneous roles. The content of the degree was mostly undergraduate mathematics, with an emphasis on theoretical and practical statistics, as well as a substantial compoent of econometrics and economic policy, and an elective component in engineering.",
            "dissertation": "My dissertation for this degree was an econometric analysis into the impact of education on the ratio of leisure to non-leisure household spending.",
          },
          {
            "level": "Master of Science",
            "subject": "Computational Statistics and Machine Learning",
            "grade": "Distinction",
            "institution": "University College London",
            "institutionURL": "https://www.ucl.ac.uk",
            "start": "2015",
            "end": "2016",
            "copy": "I took a year off work to complete this full-time Masters degree, which comprehensively covered a wide variety of theoretical and applied Machine Learning material.",
            "dissertation": "My dissertation for this degree was on the use of side-information in low-rank matrix factorisation for collaborative filtering-based commercial recommender systems.",
          },
        ],
      },
    };
  }

  render() {
    return (
  <div className="container">
    <div className="row">
      <div className="col-md-9">
        <Header { ...this.state.cv.header } />
        <Profile {...this.state.cv.profile} />
        <PositionGroup positions={this.state.cv.positions} />
        <Section
          title="Qualifications"
          component={Qualification}
          items={this.state.cv.qualifications}
        />
      </div>
      <div className="col-md-3 mt-3 small">
        <p>
          For many years now I've had a dream of producing my "unabridged CV".
          In this mythical document, I wouldn't be constrained by two paltry
          sheets of A4 paper, and could expound upon my many talents and
          achievements with as much bombast as I liked. People reading it would
          be presented with just the information that was relevant to them, and
          they could search and cross-reference relevant sections of interest,
          without being bogged down in all the details they didn't care about.
        </p>
        <p>
          This is that document. I am finally writing it. It's a work
          in progress, but progress is being made.
        </p>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
