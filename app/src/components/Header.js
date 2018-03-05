import React, {Component} from 'react';
import style from '../css/style1.css'
import Registration from './Registration.js';
import Image1 from "../img/image1.png";

class Header  extends Component {
  render(){
    return (
      <header>
      <div id="logo">
      <img id="im" src={Image1}/>
    		<h1><a href="index1.html"> DREAMER </a></h1>
    		<p> Украшения ручной работы </p>
        </div>
        <Registration/>
      </header>
    );
  }

}

export default Header ;
