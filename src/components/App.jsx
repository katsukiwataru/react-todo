import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      text: "title",
    }
  }
  render() {
    if (this.state.text) {
      return (
        <div className="siimple-box siimple--bg-dark">
          <h1 className="siimple-box-title siimple--color-white">{this.state.text}</h1>
          <Form/>
        </div>
      )
    } else {
      return (
        <div className="siimple-box">
          <h1 className="siimple-box-title siimple--color-white">erro</h1>
          <Form />
        </div>
      )
    }
  }
}
