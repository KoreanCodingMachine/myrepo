import React, { useState } from 'react';

const Say = () => {
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState('black');
  const enter = () => {
    setMsg('안녕하세요!');
  };
  const out = () => {
    setMsg('안녕히 가세요!');
  };

  return (
    <div>
      <button type='button' onClick={enter}>
        입장
      </button>
      <button type='button' onClick={out}>
        퇴장
      </button>
      <h1 style={{ color }}>{msg}</h1>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          setColor('red');
        }}
      >
        빨강
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          setColor('green');
        }}
      >
        초록
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          setColor('blue');
        }}
      >
        파랑
      </button>
    </div>
  );
};

export default Say;
