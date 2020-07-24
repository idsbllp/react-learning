import React, { Component, Children } from 'react';

class ChildrenComponent extends Component {
  render() {
    const { children } = this.props;
    const foo = Children.map(children, child => {
      return child;
    });
    return (
      <div>
        {
          foo
        }
      </div>
    );
  }
}

export default ChildrenComponent;
