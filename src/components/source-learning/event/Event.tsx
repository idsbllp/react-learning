import React from 'react';

class EventComponent extends React.Component {
  handleClick(e: React.MouseEvent) {
    console.log(e);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Click Me
      </div>
    );
  }
}

export default EventComponent;
