import React, {Component} from 'react';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = { isOpened:false};
  }
  toggleState() {
    this.setState({isOpened:!this.state.isOpened});
  }
render (){
return (
  <div id="settings">
    <button onClick={this.toggleState.bind(this)} className ="closed2" id="burger2">Скрытые возможности</button>
    {this.state.isOpened ?
      <div id="sett" className="sett">
        <ul>
            <li>
                  Выбери свой цвет бэка
                  <input type="color" id="bgColor"/>
            </li>
            <li>
                  <label for="name" >Введите рамер текста</label>
                    <input name="size" type="text" id="txtChange"/>
                    <input type="submit" onclick="changeTxt()" value="Изменить" />
            </li>
            <li>
                  Спрячь последний тэг
                  <input type="button" id="close" value="Спрятать"/>

            </li>
            <li>
                  Выбери свой шрифт
                  <select id="font">
                                <option selected value="">Default</option>
                                <option>Comic Sans MS</option>
                                <option>Lucida Console</option>
                                <option>Verdana</option>
                                <option>Trebuchet MS</option>
                  </select>
            </li>
        </ul>
      </div>
    : ''}
  </div>
    )
  }
}

export default Settings;
