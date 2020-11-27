import React from 'react';
import styled from 'styled-components';
import {Dimensions,Text} from 'react-native';
const {height} = Dimensions.get('window');

const Btn = styled.TouchableOpacity`
  width: 100%;
  height: ${height * 0.075}px;
  background: #4479fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
`;

const Button = ({text,style,...props}) => {
  return (
    <Btn {...props} style={{...style}} activeOpacity={0.8}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>{text}</Text>
    </Btn>
  );
};

export default Button;
