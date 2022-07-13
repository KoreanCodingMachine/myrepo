import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    //state 초기값 설정하기
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onclick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
