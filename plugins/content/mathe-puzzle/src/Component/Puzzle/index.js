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
      palette: [{ ast: ["+","#", "#"]},
                { ast: "4"},
                { ast: ["+", "#", { ast : "88" }]}],
      center: "#",
      solution: [], 
      width: 600,
      height: 400,
      setPalette: true,
      setStart: false,
      setSolution: false,
    };
    for (const i in this.state.palette) {
      this.state.palette[i].id = i;
      this.state.palette[i].isMovable = true;
    }
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

    const newCenter = this.insertAstIntoFirstSpot( this.state.center, this.state.palette[index] )
    if (newCenter !== null) {
      this.state.palette.splice(index, 1)[0]
      this.state.center = newCenter
      
      this.setState({palette : this.state.palette,
                     center  : this.state.center })
    }
    alert("no space "+JSON.stringify(this.state.center))
  }

  insertAstIntoFirstSpot( parent, child) {
    if (parent == "#") {
      return child;
    } 
    else if (Array.isArray(parent.ast)) {
      for (const i in parent.ast) {
        const newElt= this.insertAstIntoFirstSpot(parent.ast[i], child);
        if (newElt !== null) {
          parent.ast[i]= newElt;
          return parent;
        }
      }
    }
    return null;
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
    
    const palette      = [{ast: ["+","#","#"]},{ ast: ["4"]}, {ast: ["+","#","88"]}]
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
