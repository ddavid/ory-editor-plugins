import React from 'react';
import '../../index.css';


class ASTFragment extends React.Component {
  constructor (props) {
    super(props);
    //console.log('AST PROPS', props)
    this.state = props;
  }

  /**
   * Entry Function for rendering ASTs. 
   * Recursively renders Nodes. 
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderChild(obj) {

    try {
      const ast = (obj === "#") ? ["#"] : obj.ast
      const head = ast[0]
      switch (head) {
        case "+":
        case "-":
        case ":":
          return this.renderSimple(ast)
        case "/":
          return this.renderFrac(ast)
        case "*":
          return this.renderMul(ast)
        case "^":
          return this.renderPow(ast)
        default:
          return this.renderNumber(ast)
      }
    } catch(e) {
      console.log('ERROR rendering', obj)
      console.log(e);
      return this.renderError(e);
    }
  }


  /**
   * Renders an error state
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderError(err) {
    return {
      width: 100,
      fragment: (<text>{err.message}</text>)
    }
  }

  /**
   * Renders all operations where 
   * the content of the text tag is the identifier
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderSimple(ast) {
    const left  = this.renderChild(ast[1]);
    const right = this.renderChild(ast[2]);
    const width = left.width + right.width + 10;
    return { 
      width,
      fragment: 
        (<g transform = {"translate(" + (- width / 2 + left.width / 2) + ",0)"}>
             <g>{ left.fragment }</g>
             <g transform={"translate(" + (left.width / 2 + 5) + ",0)"}><text style = {{"text-anchor":"middle"}}> {ast[0]} </text></g>
             <g transform={"translate(" + (left.width / 2 + right.width / 2 + 10) + ",0)"}>{ right.fragment }</g>
        </g>)
      }
  }

  /**
   * Renders the equivalent to \frac{} in latex 
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderFrac(ast) {
    const left  = this.renderChild(ast[1]);
    const right = this.renderChild(ast[2]);
    const width = left.width + right.width + 10;
    return { 
      width,
      fragment: 
        (<g transform = {"translate(" + (-width / 2 + left.width / 2) + ",0)"}>
             <g>{ left.fragment }</g>
             <g transform={"translate(" + (left.width / 2 + 5) + ",0)"}><text style = {{"text-anchor":"middle"}}> {ast[0]} </text></g>
             <g transform={"translate(" + (left.width / 2 + right.width / 2 + 10) + ",0)"}>{ right.fragment }</g>
        </g>)
      }
  }

  /**
   * Renders the equivalent to \times in latex between the operands
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderMul(ast) {
    const left  = this.renderChild(ast[1]);
    const right = this.renderChild(ast[2]);
    const width = left.width + right.width + 10;
    return { 
      width,
      fragment: 
        (<g transform = {"translate(" + (-width / 2 + left.width / 2) + ",0)"}>
             <g>{ left.fragment }</g>
             <g transform={"translate(" + (left.width / 2 + 5) + ",0)"}><text style = {{"text-anchor":"middle"}}> &times; </text></g>
             <g transform={"translate(" + (left.width / 2 + right.width / 2 + 10) + ",0)"}>{ right.fragment }</g>
        </g>)
      }
  }

  /**
   * Renders an exponentiation
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderPow(ast) {
    const left  = this.renderChild(ast[1]);
    const right = this.renderChild(ast[2]);
    const width = left.width + right.width + 10;
    return { 
      width,
      fragment: 
        (<g transform = {"translate(" + (-width / 2 + left.width / 2) + ",0)"}>
             <g>{ left.fragment }</g>
             <g transform={"translate(" + (left.width / 2 + 5) + ",0)"}><text style = {{"text-anchor":"middle"}}> {ast[0]} </text></g>
             <g transform={"translate(" + (left.width / 2 + right.width / 2 + 10) + ",0)"}>{ right.fragment }</g>
        </g>)
      }
  }

  /**
   * Renders a Number or Variable with its enclosing Tile
   * @param  {JSON} ast JSON Abstract Syntax Tree
   * @return {JSON}     Object with its width and JSX element as attributes
   */
  renderNumber(ast) {
    const text= ast.toString();
    const width= ast.length * 20;
    const fragment= (
      <g>
          <rect x={- width/2} y="-20" width={width} height="30" fill="red"/>
          <text style={{"text-anchor":"middle"}}>{text}</text>
      </g>
    );
     return {
         width : 2*width, fragment
     }
  }

  render() {
    return this.renderChild(this.props.block).fragment;
  }
}

export default ASTFragment