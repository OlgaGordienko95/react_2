import React, {Component} from 'react';
import style from '../css/style1.css'

class Menu extends Component {
  render(){
    return (
      <div id="wrapper">
  	    <div id="menu">
      		<ul>
      			<li className="current_page_item"><a href="index1.html" title= "на главную">Главная</a></li>
      			<li><a href="#">Магазин</a></li>
      			<li><a href="#">FAQ</a></li>
      			<li><a href="#">Контакты</a></li>
      		</ul>
          		<div id="search" >
          			<form method="get" action="#">
          				<div>
          					<input type="text" name="s" id="search-text" placeholder="Что вы хотите купить?" />
          				</div>
          			</form>
          		</div>
  	     </div>
    </div>
    )
  }

}

export default Menu;
