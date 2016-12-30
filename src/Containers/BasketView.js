import React, { Component } from 'react';
import { Link } from 'react-router';

class BasketView extends Component {
  render() {
    return (
      <div className="ProductPage">

        <h1>basket view</h1>

        <Link to="/shipping"> Next </Link>
      </div>
    );
  }
}

export default BasketView;
