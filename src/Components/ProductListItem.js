import React, { Component } from 'react';

import AddToCartButton from './AddToCartButton';

class ProductListItem extends Component {
  render() {
    return (
      <div className="product-list-item">
        <img className="product-list-item-img" src={this.props.img}></img>
        <div className="product-list-item-info">
          <div className="product-list-item-info-text">
          <h3> {this.props.name}</h3>
          <p>{this.props.price} €/kg</p>
        </div>
          <AddToCartButton clickHandler={this.props.clickHandler}/>
        </div>


      </div>
    );
  }
}

export default ProductListItem;
