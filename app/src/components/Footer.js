import React, {Component} from 'react';
import style from '../css/style1.css'

class Footer extends Component {
  render(){
    return (
      <footer>
      <div id="footer-menu">
  		<ul>
  			<li className="current_page_item"><a href="index.html" title= "на главную">Главная</a></li>
  			<li><a href="#">Магазин</a></li>
  			<li><a href="#">FAQ</a></li>
  			<li><a href="#">Контакты</a></li>
  		</ul>
  	</div>
    </footer>
    )
  }
}

export default Footer;
