import React, { Component } from 'react';

import ProductListItem from './ProductListItem';
import FilterBar from './FilterBar';


class ProductList extends Component {

handleSearch = (e) =>{
  e.preventDefault();

  this.props.handleSearch(e.target.value)
}

  render() {

    let products;
    if(this.props.products){

      products = this.props.products.map(item =>{
        console.log('mapping');
        return <ProductListItem  key={item.id} img={item.image.normal} name={item.name} price={item.price}/>
      })
    }
    return (

    <div className="product-wrapper">
      <FilterBar value={this.props.searchValue} handleSearch={this.handleSearch.bind(this)}/>

      <div className="product-list">

        {products}
      </div>
    </div>

    );
  }
}

export default ProductList;
