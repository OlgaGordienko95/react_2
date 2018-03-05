import React,{Component} from 'react';
import { SketchPicker } from 'react-input-colorpicker';

class Component extends Component {
  state = {
    background: '#c9c9b5',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}
