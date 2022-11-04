import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()

    function inputNum(e) {
        const input = e.target.value
        if(num === 0) {
            setNum(input)
        }else {
            setNum(num + input)
        } 
    }

    function clear() {
        setNum(0)
    }

    function porcentage() {
        setNum(num / 100)
    }

    function changeSign() {
        if(num>0) {
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e) {
        const operatorInput = e.target.value;
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculateResult() {
        console.log('calculou')
        console.log(oldNum);
        console.log(num);
        console.log(operator);

        if(operator === '÷') {
            console.log('dividiu');
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if(operator === 'X') {
            setNum(parseFloat(oldNum) * parseFloat(num))
        } else if(operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))
        } else if(operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num))
        } 
    }

  return (
      <div className='calculator'>
      <Box m={5} />
      <Container maxWidth='xs'>
    <div className="wrapper">
    <Box m={8} />
        <h1 className='result'>{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className='orange' onClick={operatorHandler} value={'÷'}>÷</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={","}>,</button>
        <button className='orange' onClick={calculateResult}>=</button>
    </div>
      </Container>
      </div>
  )
}
