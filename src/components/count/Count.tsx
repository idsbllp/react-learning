import React, { PureComponent } from 'react';
import { ICountProps } from './connecter';

class Count extends PureComponent<ICountProps> {
  /** redux-thunk click */
  // handleClick = () => {
  //   const { incrementCount } = this.props;
  //   incrementCount().then(res => {
  //     console.log('redux-thunk promise', res);
  //   });
  // }

  /** redux-saga click */
  handleClick = () => {
    const { incrementCount } = this.props;
    const foo = incrementCount();
    console.log('foo', foo);
  }

  render() {
    const { count, decrementCount } = this.props;

    return (
      <>
        Count: {count}
        <button onClick={decrementCount}>-</button>
        <button onClick={this.handleClick}>+</button>
      </>
    );
  }
}

export default Count;
