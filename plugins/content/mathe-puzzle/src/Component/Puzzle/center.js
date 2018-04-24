import React from 'react'
import '../../index.css'

import ASTFragment from './ast-fragment'

class Center extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    const block = this.props.block
    let puzzle  = (<ASTFragment ast = { block } />)
      
    return puzzle;
  }
}

export default Center