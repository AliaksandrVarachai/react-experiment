import React from 'react';
import ReactDOM from 'react-dom';

class ComponentInner extends React.Component {
  constructor() {
    super();
    // this.state = {title: ''};
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter text here" onChange={this.props.changeHandler} /*onChange={this.changeHandler}*//> &nbsp;
        <b>inner</b>: {this.props.title}
      </div>
    )
  }
}

class ComponentOuter extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div>
        <h4>Outer: {this.state.title}</h4>
        <hr/>
        <ComponentInner changeHandler={this.changeHandler} title={this.state.title}/>
      </div>
    )
  }
}





ReactDOM.render(<ComponentOuter/>, document.getElementById('app-root'));
