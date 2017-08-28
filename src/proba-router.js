import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        This is a <b>Home page</b>
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

ReactDOM.render((
  <Router>
    <div>
      <App/>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
), document.getElementById('app-root'));
