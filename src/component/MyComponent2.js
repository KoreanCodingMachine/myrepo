import React from 'react';
import PropTypes from 'prop-types';

const MyComponent2 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// props기본값 설정 -> default props
MyComponent2.defaultProps = {
  name: '기본 이름',
};

//propTypes검증
MyComponent2.propTypes = {
  name: PropTypes.string.isRequired,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent2;
