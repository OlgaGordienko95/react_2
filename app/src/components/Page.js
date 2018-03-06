import React,{Component} from 'react';
import style from '../css/style1.css';
import Post from './Post.js';
import Sidebar from './Sidebar';
import Settings from './Settings.js';
import Header from './Header.js';
import Menu from './Menu.js';
import Footer from './Footer.js';


class Page extends Component{
  constructor(props){
    super(props);
  }
  
render(){
  return (
      <div id="page" className="colorPicker" style={{color:this.props.myColor}}>
        <Sidebar/>
        <Post/>
          <Settings/>
          <div style= {{clear:"both"}}>&nbsp;</div>
      </div>
  )
}
}
export default Page;
