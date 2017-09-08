import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/proba-router.html">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        This is an <b>About page</b>
      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        This is a <b>Contact page</b>
      </div>
    )
  }
}

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-vs-state`}>Props vs State</Link></li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

ReactDOM.render((
  <Router>
    <div>
      <App/>
      <hr/>
      <Route exact path="/proba-router.html" component={null}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
), document.getElementById('app-root'));
