import React, { Component } from 'react';


class ProductListItem extends Component {
  render() {
    return (
      <div className="product-list-item">
        <h3> {this.props.name}</h3>
        <img className="product-list-item-img" src={this.props.img}></img>

        <h3>{this.props.price} €/kg</h3>

      </div>
    );
  }
}

export default ProductListItem;
