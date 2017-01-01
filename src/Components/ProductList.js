import React, { Component } from 'react';

import ProductListItem from './ProductListItem';
import FilterBar from './FilterBar';


class ProductList extends Component {

handleSearch = (e) =>{
  e.preventDefault();
  this.props.handleSearch(e.target.value)
}
handleClick = (item) =>{
  this.props.handleClick(item);
}

  render() {

    let products;
    if(this.props.products){

      products = this.props.products.map(item =>{
        return <ProductListItem  key={item.id} img={item.image.normal} name={item.name} price={item.price} clickHandler={this.handleClick.bind(this, item)}/>
      })
    }
    return (

    <div className="product-wrapper">
      <FilterBar value={this.props.searchValue} handleSearch={this.handleSearch.bind(this)}/>

      {
        products.length > 0?
      <div className="product-list">
        {products}
      </div>
      :
      <div className="product-list">
        <h2>
          No products fit criteria
        </h2>
      </div>
      }

    </div>

    );
  }
}

export default ProductList;
