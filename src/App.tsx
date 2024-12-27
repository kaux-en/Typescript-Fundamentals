import React from 'react';
import './App.css';
import ColorList from './components/ColorList.tsx';
import FilterNumbers from './components/FilterNumbers.tsx';
import UserList from './components/UserList.tsx';

function App() {

  const greeting: string = 'Hello Typescript'
  const numbers: number[] = [5, 10, 15, 3, 4, 7, 8, 2]

  const calculateSum = (a:number, b: number): number => {
    return (a + b)
  }



  return (
    <div className="App">
      <p>Greeting: {greeting}</p>
      <p>Number 1: {numbers[0]}</p>
      <p>Number 2: {numbers[1]}</p>
      <p>Number 3: {numbers[2]}</p>

      <p>Calculate the Sum: {calculateSum(5, 10)}</p>

      <ColorList />
      <FilterNumbers numberList={numbers}/>
      <UserList />
    </div>
  );
}

export default App;
