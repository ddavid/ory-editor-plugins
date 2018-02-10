import React from 'react';
//import Puzzle from '../Puzzle';
import $ from 'jquery';
import '../index.css';
import MathPuzzle from './serlo_math_puzzle';
//import NavigateNext from 'material-ui-icons/NavigateNext';
//import RemoveCircle from 'material-ui-icons/RemoveCircle';

class Puzzle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      palette: [1,2,'+'],
      start: [],
      solution: [3],
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
  }

  defaultState() {
    return {
      palette: [1,2,'+'],
      start: [],
      solution: [3],
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
  }

  componentDidMount() {

    var puzzle= document.getElementById('math-puzzle');
    var input= puzzle.getAttribute('data-source');

    console.log(this.state, puzzle, input);

    $(puzzle).MathPuzzle(puzzle, input.value);

    //this.setState(this.defaultState());
  }

  render() {

    const paletteString  = this.state.palette.join(' ');
    const solutionString = this.state.solution.join(' ');
    const source = {'data-source' : solutionString + ' = ' + paletteString};  

    return (
    <div>
      <div id="math-puzzle" className="math-puzzle" {...source}></div>
    </div>
    );
  }
}

export default Puzzle
