

import React, { Component } from 'react';


class Sidebar extends Component {

  constructor(){
    super();
}

    handleChange = (category) =>{

    this.props.handleChange(category);
  }


  render() {

    return (
      <div className="sidebar">
      <button className="nav-button" onClick={this.handleChange.bind(this,'fruit')}>
        Fruits!
      </button>

      <button className="nav-button" onClick={this.handleChange.bind(this,'vegetable')}>
        Vegetables!
      </button>

      </div>

    );
  }
}

export default Sidebar;
