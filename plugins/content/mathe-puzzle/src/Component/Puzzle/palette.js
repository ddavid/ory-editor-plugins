import React from 'react'
import '../../index.css'

import ASTFragment from './ast-fragment'

class Palette extends React.Component {
  constructor (props) {
    super(props);
    //console.log('AST PROPS', props)
    this.state = {
      canvas  : props.canvas,
      blocks  : props.blocks
    };
  }

  /*fragmentOnClick( evt, index ) {

    let new_blocks = this.state.blocks
    new_blocks.splice(index, 1)
    this.setState({blocks : new_blocks})
  }*/

  render() {

    const canvas_width   = this.state.canvas.width
    const canvas_height  = this.state.canvas.height
    const palette_height = 70
    const background     = (<rect width = { canvas_width } height = {"" + palette_height} fill = "lightblue"/>)
    const translation    = "translate(" + (- canvas_width/2) + "," + (canvas_height/2 - palette_height) + ")"
    
    return (
      <g className = "palette" transform = {translation}>
        {background} 
        {
          this.state.blocks.map(( formel, index) => 
            <g onClick = {( evt ) => this.props._onClick( index )} key = { index } transform = {"translate(" + ((index*100) + 50) + ","+ palette_height/2 + ")"}>
              <ASTFragment block = { formel }/>
            </g>)
        }
      </g>
    )
  }
}

export default Palette