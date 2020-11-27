import React from 'react';
import styled from 'styled-components';

const Input = styled.TextInput`
  background: #f8f8f8;
  padding: 12px 10px;
  font-weight: bold;
  border-radius: 15px;
`;

const TextInput = ({text, color = '#c2c3c5', style,inverted}) => {
  return (
    <Input style={{...style}} placeholder={text} placeholderTextColor={color} />
  );
};

export default TextInput;
