import React, { Component } from 'react';

export default class Root extends Component {
  componentDidMount() {
    console.log('object');
  }

  handleClick = () => {
    console.log(111111);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        root
      </div>
    );
  }
}
