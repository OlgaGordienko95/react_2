import React, {Component} from 'react';
import ColorPicker from './ColorPicker'
class Settings extends Component {
  constructor(props){
    super(props);
    this.state = { isOpened:false};
  }
  state = {
    color:" "
  };
  updateData = (color) =>{
    this.SetState({color})
  }
  toggleState() {
    this.setState({isOpened:!this.state.isOpened});
  }
render (){
return (
    <div id="settings">
      <button onClick={this.toggleState.bind(this)} className ="closed2" id="burger2">Скрытые возможности</button>
      {this.state.isOpened ?
          <ul>
              <li>
                    Выбери свой цвет бэка
                    <ColorPicker updateData = {this.updateData}/>
              </li>
              <li>
                    <label forhtml="name" >Введите рамер текста</label>
                      <input name="size" type="text" id="txtChange"/>
                      <input type="submit"  value="Изменить" />
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
            : ''}
          </div>
    )
  }
}

export default Settings;
