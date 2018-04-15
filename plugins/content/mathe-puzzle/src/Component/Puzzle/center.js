import React from 'react'
import '../../index.css'

import ASTFragment from './ast-fragment'

class Center extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    const block = this.props.block
    let puzzle  = (block.ast.length === 0) ? 
       (<rect width = "100" height = "70" fill = "lightblue" transform = "translate(-50, -35)"/>) : 
       (<ASTFragment ast = {block.ast} />)
      
    return puzzle;
  }
}

export default Center