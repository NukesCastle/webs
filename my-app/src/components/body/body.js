import React, { Component } from 'react';
import Fireb from '../firebase/index'

class Body extends Component{
    render(){
        const element = (
            <div class="container">
              <h1>Hello, world!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <Fireb></Fireb>
              <br></br>
            </div>
          );
        return element
    }
}
export default Body;