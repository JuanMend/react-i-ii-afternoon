import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleInfo from './Components/PeopleInfo'
import data from './data';
import Button from './Components/Button'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     index: 0
    }

  }
      nextHandler = () => {
        if(this.state.index === 24) {
          this.setState({index: 0})
        }
        else if(this.state.index >= 0) {
          this.setState({index: this.state.index+1})
        }
        
      }
      
      countPrevHanlder = () => {
        if(this.state.index === 0) {
          this.setState({index: 24})
        }
        else if(this.state.index > 0) {
          this.setState({index: this.state.index-1})
        }
      }


  render() {
   
    return (
      <div className="App">
        <header className="App-header">
         <ul className="nav">
           <li className="left">Home</li>
         </ul>
        </header>
        
    
        <PeopleInfo  index={this.state.index} />
        <Button prev={this.countPrevHanlder} next={this.nextHandler}/>
      </div>
      
      );
    }
  }
  
  export default App;
  
 