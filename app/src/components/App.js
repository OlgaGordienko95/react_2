import React, {Component} from 'react';
import {render} from 'react-dom';
import style from '../css/style1.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Page from './Page.js';

class App extends Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
    <div>
      <Header/>
      <Menu/>
      <Page/>
      <Footer/>
    </div>
  );
}
}
export default App;
