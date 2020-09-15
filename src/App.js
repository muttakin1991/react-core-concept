import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a react person </p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name} {[product.price]}</li>)
          }
        </ul>
        {
         products.map(pd =><Product product={pd}></Product>)
        }
        {
          friends.map(fd => <MyFriends friends={fd}></MyFriends>)
        }
        
        <ul>
          {
            cricketer.map(cPlayer => <li>{cPlayer.name}</li>)
          }
        </ul>
        {
          cricketer.map(cPlayer => <MyCricketer player={cPlayer}></MyCricketer> )
        }
        <Users></Users>
      </header>
    </div>
  );
}
const  nayoks = ['Anwar', 'jafor', 'Alomgir', 'Salman', 'shuvo', 'razzak', 'joshim']
const products = [
  {name:'photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'web design', price: '$10.99'},
  {name: 'web dlopment', price: '$10.99'},
  {name: 'PDF Reader', price: '$6.99'},
]

const friends = [
  {name: 'Afnan', age: '2'},
  {name: 'shawon', age: '25'},
  {name: 'saif', age: '2'},
  {name: 'thasim', age: '2'}
]

const cricketer = [
  {name: 'shakib-al-hassan', position: 'all-rounder'},
  {name: 'tamim iqbal', position: 'opner'},
  {name: 'mashrafee mortaza', position: 'captain'},
  {name: 'mahamudullah riad', position: 'all-rounder'},
  {name: 'mustafizur rahman', position: 'left-arm-bowler'}
]

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic User: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.title}, {user.id} {user.completed}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return(
    <div>
      <h1>Count: {count} </h1>
      {/* <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleIncrease()}>Increase</button>
    </div>
  )

}
function MyCricketer(props){
  const productStyle={
    border : '4px solid red',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    color : 'blue',
    height : '300px',
    width : '200px',
    marginBottom : '5px',
    float : 'left'
  }
const buttonStyle = {
  backgroundColor: 'salmon',
  fontWeight: 'bolder',
  padding: '10px',
  borderRadius: '5px'
}
const {name, position} = props.player;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{position}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}
function MyFriends(props){
  const productStyle={
    border : '4px solid red',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    color : 'blue',
    height : '200px',
    width : '200px',
    marginBottom : '5px',
    float : 'left'
  }
const buttonStyle = {
  backgroundColor: 'salmon',
  fontWeight: 'bolder',
  padding: '10px',
  borderRadius: '5px'
}
const {name, age} = props.friends;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{age}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    border : '4px solid red',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    color : 'blue',
    height : '200px',
    width : '200px',
    marginBottom : '5px',
    float : 'left'
  }
const buttonStyle = {
  backgroundColor: 'salmon',
  fontWeight: 'bolder',
  padding: '10px',
  borderRadius: '5px'
}
const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  )
}
export default App;
