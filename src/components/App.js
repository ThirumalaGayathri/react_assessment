import React, { Component } from 'react';
import '../style/App.css';
import Addtask from './Addtask';
import Demo from "../mock/AppMock";
import backgroundimage from "../images/backgroundimage.jpg";

  class App extends React.Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(
        <figure className="position-relative">
         <img src={backgroundimage} alt="backgroundimage" padding-left= "40px"
    padding-bottom= "720px" />
    <div className="div_class">
        <h1 >{this.props.Content.heading} </h1><br/><br/>
        <div >
       <Addtask addtodo={this.addtodo} />
    </div>
     </div>
     </figure>
    );
      }
  }
  App.defaultProps={Content: Demo}
  export default App;