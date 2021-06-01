import React, { PureComponent } from 'react';

interface IState {
  list: number[];
}

let i = 1;

class Button1 extends React.Component<{foo: string|number}> {
  componentWillUnmount() {
    console.log('logllp 卸载 lo', this.props.foo);
  }

  render() {
    return (
      <span />
    );
  }
}


export default class List extends PureComponent<{}, IState> {
  state: IState = {
    list: [i],
  };

  componentDidMount() {
    console.log('object');
  }

  handleClick = (evt: React.MouseEvent) => {
    const target = evt.currentTarget;

    console.log(111111, target, target.getBoundingClientRect());

    const oldList = [...this.state.list];
    const popValue = oldList.pop()!;
    const newList = [...oldList, ++i, popValue];

    this.setState({
      list: newList,
    }, () => {
      console.log(22222, target, target.getBoundingClientRect());
    });
  }

  renderRows() {
    const { list } = this.state;
    // const res: JSX.Element[] = [];
    const res = list.map(val => (
      <div key={val} onClick={this.handleClick}>
        {val}
        <Button1 foo={val} />
      </div>
    ));

    return res;
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        {this.renderRows()}
      </div>
    );
  }
}
