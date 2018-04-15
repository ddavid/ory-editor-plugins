import React   from 'react';
import DOM     from 'react-dom';
import Dragula from 'react-dragula';
//import Puzzle from '../Puzzle';
import $ from 'jquery';
import '../../index.css';
import MathPuzzle  from './serlo_math_puzzle';
import ASTFragment from './ast-fragment';
import Center      from './center';
import Palette     from './palette'; 
//import NavigateNext from 'material-ui-icons/NavigateNext';
//import RemoveCircle from 'material-ui-icons/RemoveCircle';

class Puzzle extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      palette: [{ ast: ["+","507","2"]},
                { ast: ["4"]},
                { ast: ["+","2","88"]}],
      center: { ast:["5"]},
      solution: [], 
      width: 600,
      height: 400,
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
  }

  defaultState() {
    // Old State - needs to be adjusted for Edit to work
    return {
      palette: [1,2,'+'],
      center: [],
      solution: [3],
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
  }

  testInsert( index ) {

    let new_blocks   = this.state.palette
    let center_block = new_blocks.splice(index, 1)[0]
    
    this.setState({palette : new_blocks,
                   center  : center_block})
  }

  /*componentDidMount() {
    //console.log("TEST");
    //let palette_tiles = DOM.findDOMNode(this);
    let container     = document.querySelector('.palette');
    //console.log("Container: ", container);
    Dragula([container]);
  }*/

  componentWillMount() {
  
    //this.setState(this.defaultState());
  }

  render() {
    const attributes = { height: 400,
          		 width : 600,
 			 viewBox:"-300 -200 600 400"
		       }
    
    const palette      = [{ast: ["+","507","2"]},{ ast: ["4"]}, {ast: ["+","2","88"]}]
    const astProps     = {ast:["+","507", ["+","2","88"]]}
    const empty_ast    = {ast: []}
    const centerProps  = {
      block : empty_ast,
      canvas      : {
        width : attributes.width, 
        height: attributes.height
      }
    }
    const paletteProps = {
      blocks : palette,
      canvas      : {
        width : attributes.width, 
        height: attributes.height
      }
    };

    const canvas = {
      width  : this.state.width,
      height : this.state.height
    }

    return (
    //<div className = "palette">
    //<ASTFragment {...astProps}/>
    
    <svg {...attributes}>
      <Center block = {this.state.center} canvas = {canvas}/>
      <Palette blocks = {this.state.palette} canvas = {canvas} _onClick = {this.testInsert.bind(this)}/>
    </svg>
    //</div>)
    );
  }
}

export default Puzzle
