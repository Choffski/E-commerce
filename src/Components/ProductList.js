import React, { Component } from 'react';

import ProductListItem from './ProductListItem';

class ProductList extends Component {
  render() {

    let products;
    if(this.props.products){

      products = this.props.products.map(item =>{
        console.log('mapping');
        return <ProductListItem img={item.image.normal} name={item.name} price={item.price}/>
      })
    }
    return (
      <div className="product-list">

        {products}

      </div>
    );
  }
}

export default ProductList;
