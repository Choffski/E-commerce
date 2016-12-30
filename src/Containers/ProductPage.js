import React, { Component } from 'react';
import { Link } from 'react-router';
// import { connect } from 'redux'

class ProductPage extends Component {
  render() {
    return (
      <div className="ProductPage">

        <h1>This is ProductPage</h1>

        <Link to="/basket"> Show Basket </Link>
      </div>
    );
  }
}

export default ProductPage;
