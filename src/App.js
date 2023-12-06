import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';

import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);


function MyButton() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count +1)
  }

  return (
    <button onClick={handleClick}>
      I'm a button. Clicked {count} times.
    </button>
  );
}


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function ShoppingList() {

  const listItems = products.map(product =>
    <li key={product.id} style={{ color: product.isFruit? 'red':'blue'}}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
};


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  function handleClick(i){
    let nextSquares = squares.slice();
    if (isXNext)
    {
      nextSquares[i] = "X";
      setIsXNext(false)
    }
    else{    
      nextSquares[i] = "0";
      setIsXNext(true)
    }
    setSquares(nextSquares);

  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Board />
        <MyButton />
        <MyButton />
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
      />
      </header>
      <ShoppingList/>
    </div>
  );
}

export default App;
