import React from 'react';
import './index.css';
//import NavigateNext from 'material-ui-icons/NavigateNext';
//import RemoveCircle from 'material-ui-icons/RemoveCircle';
import Edit from './Edit'
import Puzzle from './Puzzle'

const MathePuzzle = (props) => props.readOnly ? (
  <Puzzle {...props} />
) : (
  <Edit {...props} />
)

export default MathePuzzle