import React from 'react';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';

import './css/Calculator.css'

const Calculator = () => {
  return (
    <Wrapper>
      <Screen>

      </Screen>
      <ButtonBox>
        <Button />
      </ButtonBox>
    </Wrapper>
  )
}

export default Calculator