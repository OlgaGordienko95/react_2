import React,{Component} from 'react';
import style from '../css/style1.css';
import Post from './Post.js';
import Sidebar from './Sidebar';
import Settings from './Settings.js';

class Page extends Component{
render(){
  return (
    <div id="page" className="colorPicker">
      <Sidebar/>
      <Post/>
      <Settings/>
    </div>
  )
}
}
export default Page;
