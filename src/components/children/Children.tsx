import React, { Component, Children, useCallback, useEffect, useMemo, useState } from 'react';

interface IState {
  number: number;
}

const Child: React.FC<{ onClick: (n: number) => void }> = props => {
  // console.log('logllp Child');
  const [first, setFirst] = useState(0);
  const handleClick = useCallback(() => {
    setFirst(f => {
      return f + 1;
    });
    props.onClick(first + 1);
  }, []);

  useEffect(() => () => {
    console.log('logllp  Child 1111');
  });

  useEffect(() => {
    // console.log('logllp Child 添加事件');
    document.addEventListener('click', handleClick);
    return () => {
      // console.log('logllp Child 移除事件');
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div onClick={handleClick}>child {first}</div>;
};

const Parent: React.FC<{ number: number, onClick: (n: number) => void }> = props => {
  // console.log('logllp Parent', props.number);
  if (props.number && !(props.number % 4)) {
    // console.log('logllp 返回了');
    // return null;
  }

  useEffect(() => () => {
    console.log('logllp Parent 2222');
  });

  const handleClick = useCallback(() => {
    //
  }, []);

  const renderChild = useMemo(() => (
    <Child onClick={props.onClick} />
  ), [props.number]);

  return (
    <>
      <div onClick={handleClick}>Parent</div>
      {renderChild}
    </>
  );
};

class Children1 extends Component {
  componentWillUnmount() {
    console.log('logllp 卸载 Children1 1111');
  }

  render(): React.ReactNode {
    return (
      <p>1111111</p>
    );
  }
}

class Parent1 extends Component<any> {
  componentWillUnmount() {
    console.log('logllp 卸载 Parent1 1111');
  }

  render(): React.ReactNode {
    return (
      <Children1 />
    );
  }
}

class Component1 extends Component<any> {
  componentWillUnmount() {
    console.log('logllp 卸载 Component1 1111');
  }

  componentDidMount(): void {
    console.log('logllp ccccc componentDidMount', this.props);
  }

  static getDerivedStateFromProps(nextProps: any) {
    console.log('logllp ccccc getDerivedStateFromProps', nextProps);
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>, nextContext: any): boolean {
    return false;
  }

  render(): React.ReactNode {
    return (
      <Parent1 bbbb={this.props.aaa} />
    );
  }
}

export default class ChildrenComponent extends Component<{}, IState> {
  state: IState = {
    number: 0,
  };

  componentDidMount() {
    console.log('挂载了');
    (window as any).setNumber = this.setNumber;

    // document.addEventListener('click', () => {
    //   console.log('setState 444', this.state.number);

    //   this.setState({
    //     number: this.state.number + 10,
    //   });

    //   console.log('setState 555', this.state.number);

    //   this.setState({
    //     number: this.state.number + 10,
    //   });
    // });
  }

  componentDidUpdate() {
    console.log('更新了了');
  }

  componentWillUnmount() {
    console.log('logllp  ChildrenComponent 1111');
    console.log('卸载了了');
  }

  handleClick = () => {
    console.log('setState 11');
    this.setState({
      number: this.state.number + 1,
    });

    // console.log('setState 222');
    // this.setState({
    //   number: this.state.number + 2,
    // });

    // console.log('setState 333');
    // this.setState({
    //   number: this.state.number + 3,
    // });
  }

  setNumber = (num: number) => {
    this.setState({
      number: num,
    });
  }

  private handleTextPreviewClick = e => {
    console.log('事件 click');
  }

  private handleTextTouch = e => {
    console.log('事件 ', e.type);

    if (e.type === 'touchend') {
      e.preventDefault();
    }
  }

  render() {
    console.log('logllp number', this.state.number);

    const { children } = this.props;
    const foo = Children.map(children, child => {
      return child;
    });

    return (
      <div
        onClick={this.handleTextPreviewClick}
        onTouchStart={this.handleTextTouch}
        onTouchEnd={this.handleTextTouch}
        onTouchMove={this.handleTextTouch}
      >
        click
      </div>
      // <div onClick={this.handleClick}>
      //   11111
      //   {/* {foo}
      //   { this.state.number % 4 &&
      //     <Parent number={this.state.number} onClick={this.handleClick} />
      //   } */}
      //   {/* {this.state.number % 4 && <Component1 />} */}
      //   <Component1 aaa={this.state.number} />
      // </div>
    );
  }
}
