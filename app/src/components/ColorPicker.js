import React,{Component} from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component {
  setState = {
    background: color.hex,
  };

  render() {
    return (
        <SketchPicker
        color={ this.state.background }
        onClick={()=>{ this.props.updateData(this.state.color)}}

      />
    );
  }
}
export default ColorPicker;
