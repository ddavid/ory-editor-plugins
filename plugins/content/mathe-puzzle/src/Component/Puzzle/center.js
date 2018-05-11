import React from 'react'
import '../../index.css'

import ASTFragment from './ast-fragment'

class Center extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    const block = this.props.block
    let puzzle  = (<g
      onClick = {( evt ) => this.props._delete(block.id)}><ASTFragment
      block={ block }
    /></g>)
      
    return puzzle;
  }
}

export default Center