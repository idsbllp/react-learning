import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

interface IState {
  count: number;
}

class BatchedUpdate extends React.PureComponent<{}, IState> {
  state: Readonly<IState> = {
    count: 0,
  };

  private handleAsyncClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleSyncClick = () => {
    setTimeout(() => {
      this.handleAsyncClick();
    }, 0);
  }

  private handleBatchUpdateClick = () => {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        this.handleAsyncClick();
      });
    }, 0);
  }


  render(): React.ReactNode {
      return (
        <div>
          <h1>点击了几次:  {this.state.count}</h1>
          <button onClick={this.handleAsyncClick}>同步</button>
          <button onClick={this.handleSyncClick}>异步</button>
          <button onClick={this.handleBatchUpdateClick}>Batched</button>
        </div>
      );
  }
}

export default BatchedUpdate;
