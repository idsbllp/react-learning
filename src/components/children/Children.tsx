import React, { Component, Children } from 'react';

interface IState {
  number: number;
}

export default class ChildrenComponent extends Component<{}, IState> {
  state: IState = {
    number: 0,
  };

  getSnapshotBeforeUpdate() {
    console.log('logllp getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    // 
  }

  componentDidMount() {
    (window as any).setNumber = this.setNumber;

    document.addEventListener('click', () => {
      console.log('setState 444', this.state.number);

      this.setState({
        number: this.state.number + 10,
      });

      console.log('setState 555', this.state.number);

      this.setState({
        number: this.state.number + 10,
      });
    });
  }

  handleClick = () => {
    console.log('setState 11');
    this.setState({
      number: this.state.number + 1,
    });

    console.log('setState 222');
    this.setState({
      number: this.state.number + 2,
    });

    console.log('setState 333');
    this.setState({
      number: this.state.number + 3,
    });
  }

  setNumber = (num: number) => {
    this.setState({
      number: num,
    });
  }

  render() {
    console.log('渲染了');

    const { children } = this.props;
    const foo = Children.map(children, child => {
      return child;
    });

    return (
      <div onClick={this.handleClick}>
        {foo}
        {this.state.number}
      </div>
    );
  }
}
