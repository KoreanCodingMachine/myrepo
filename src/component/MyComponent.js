// rafce -> 함수형 컴포넌트 스니펫
// rcc -> 클래스형 컴포넌트 스니펫
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  //   const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      {/* 컴포넌트 태그 사이의 내용을 보여주는 props */}
      children 값은 {children}입니다.
    </div>
  );
};

// props 기본값 설정 : defaultProps
MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string, // name값은 반드시 문자열로
};

export default MyComponent;
