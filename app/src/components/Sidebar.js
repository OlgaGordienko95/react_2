import React, {Component} from 'react';
import style from '../css/style1.css'

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = { isOpened:false};
  }
  toggleState() {
    this.setState({isOpened:!this.state.isOpened});
  }

  render(){
    console.log('isOpened', this.state.isOpened);
    return (
      <div id ="side">
        <button onClick={this.toggleState.bind(this)} className="closed" id="burger">  Ассортимент </button>
        {this.state.isOpened ?
        <div id="sidebar" className="m_sidebar">
          <ul>
            <li><a href="#">Мужские браслеты</a></li>
            <li><a href="#">Браслеты</a></li>
            <li><a href="#">Брошки</a></li>
            <li><a href="#">Бусы</a></li>
            <li><a href="#">Венки</a></li>
            <li><a href="#">Жгуты из бисера</a></li>
            <li><a href="#">Кулоны, подвески</a></li>
            <li><a href="#">Серьги</a></li>
            <li><a href="#">Чокеры</a></li>
            <li><a href="#">Перстни</a></li>
          </ul>
          </div>
        : ''}
        <div style= {{clear:"both"}}>&nbsp;</div>
      </div>
    );
  }
}
export default Sidebar;
