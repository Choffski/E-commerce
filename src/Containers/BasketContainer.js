import React, { Component } from 'react';
import { connect } from 'redux'

class BasketContainer extends Component {
  render() {
    return (
      <div className="ProductPage">

        <h1>This will hold all the basket component </h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BasketContainer;
