
import React from 'react';
import './App.css';
import UserClass from './user/UserClass';
import { UserFunction, UserChildren } from './user';

const users = [
  {name: "Pero", age: 21},
  {name: "Ana", age:22},
  {name:"Mirko", age: 41}
]

export default class App extends React.Component{
  render(){
    return(
      <>
        <h1>React aplikacija</h1>
        <UserClass name={users[0].name} age={users[0].age}/>
        <UserFunction name={users[1].name} age={users[1].age}/>
        <UserChildren name={users[2].name} age={users[2].age}>I hobi mi je plivanje
        </UserChildren>
        
      </>
    );
  }
}