import React, { Component } from 'react';
// import FaBeer from 'react-icons/fa/beer';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right'
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down'
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left'

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = { view: "split"};

    this.switchToEditor = this.switchToEditor.bind(this);
    this.switchToSplit = this.switchToSplit.bind(this);
    this.switchToView = this.switchToView.bind(this);
  }

  switchToEditor(e) {
    this.props.onClick("editor")
  }

  switchToSplit(e) {
    this.props.onClick("split")
  }

  switchToView(e) {
    this.props.onClick("view")
  }

  render() {
    return (
      <div className="toolbar">
        <FaArrowCircleLeft width="40" height="40" onClick={this.switchToView}/>
        <FaArrowCircleDown width="40" height="40" onClick={this.switchToSplit}/>
        <FaArrowCircleRight width="40" height="40" onClick={this.switchToEditor}/>
      </div>
    );
  }
}

export default Toolbar;
