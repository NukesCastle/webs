import React, { Component } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       <Header></Header>
        </header>
        <body className="App-body">
        <Body></Body>
        </body>
        <footer className="App-footer">
        <Footer></Footer> 
        </footer>

      </div>
    );
  }
}

export default App;
