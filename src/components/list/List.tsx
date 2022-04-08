import React, { PureComponent } from 'react';

interface IState {
  flag: boolean;
}

export default class List extends PureComponent<{}, IState> {
  state: IState = {
    flag: false,
  };

  componentDidMount() {
    console.log('List Mount');
  }

  private handleClick = (evt: React.MouseEvent) => {
    this.setState({
      flag: !this.state.flag,
    });
  }

  private renderList() {
    const { flag } = this.state;

    return [
      <li key={1}>1</li>,
      flag ? null : <li key={2}>2</li>,
      <li key={3}>3</li>,
      <li key={4}>4</li>,
      !flag ? null : <li key={2}>2</li>,
    ].filter(v => v);
  }

  render() {

    return (
      <div onClick={this.handleClick}>
        {this.renderList()}
      </div>
    );
  }
}
