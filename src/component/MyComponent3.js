import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent3 extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
//기본 props 지정
MyComponent3.defaultProps = {
  name: '기본이름',
  favoriteNumber: 1,
  children: '기본자식',
};

//props type지정 -> isRequired가 들어오면 반드시 타입 지켜줘야함
MyComponent3.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent3;
