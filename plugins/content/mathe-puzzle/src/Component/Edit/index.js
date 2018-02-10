import React from 'react';
import Puzzle from '../Puzzle';
import '../index.css';
//import NavigateNext from 'material-ui-icons/NavigateNext';
//import RemoveCircle from 'material-ui-icons/RemoveCircle';

function Square (props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function Rectangle (props) {
    return (
      <button className="rect" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Edit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      palette: [],
      start: [],
      solution: [],
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
  }

  handleClick(input) {

    if(this.state.setPalette) {
      
      this.state.palette.push(input);
      this.setState({
        palette: this.state.palette,
      })
    }    
    else if (this.state.setStart) {
      
      this.state.start.push(input);
      this.setState({
        start: this.state.start,
      });
    }
    else {
      
      this.state.solution.push(input);
      this.setState({
        solution: this.state.solution,
      })
    }
  }

  renderSquare(input) {
    return (
      <Square 
        value={input}
        onClick={() => this.handleClick(input)} 
      />
    );
  }

  renderRectangle(input) {
    return (
      <Rectangle
        value={input}
        onClick={() => this.handleClick(input)} 
      />
    );
  }

  toggleSetter() {

    if(this.state.setPalette){
      this.setState({
        setPalette: false,
        setStart: true,
      })
    }
    else if(this.state.setStart){
      this.setState({
        setStart: false,
        setSolution: true,  
      })
    } 
    else {
      //preview puzzle
    }
  }

  defaultState() {
    return {
      palette: [],
      start: [],
      solution: [],
      setPalette: true,
      setStart: false,
      setSolution: false,
    }
  }

  clear() {

      this.setState(this.defaultState());
  }

  render() {
    const status = 'Calculator Test: \n' 
                 + 'palette: '
                 + this.state.palette.join(' ') + '\n'
                 + 'start: ' 
                 + this.state.start.join(' ')   + '\n'
                 + 'solution: '
                 + this.state.solution.join(' ');

    return (
      <div className="edit">
        <div className="puzzle-input">
          <div className="board-row">
              <button className="rect" onClick={() => this.clear()}>
                Clear
              </button>
              {this.renderSquare('/')}
          </div>
          <div className="board-row">
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
              {this.renderSquare('x')}
          </div>
          <div className="board-row">
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare('-')}
          </div>
          <div className="board-row">
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare('+')}
          </div>
          <div className="board-row">
              {this.renderRectangle(0)}
            <button className="square" onClick={() => this.toggleSetter()}>
              >
            </button>
          </div>
          <div className="status">
            {status}
          </div>
        </div>
        <div clasName="math-puzzle">
          <Puzzle {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Edit
