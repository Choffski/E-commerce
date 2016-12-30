import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProductList from '../Components/ProductList';

import { getProducts, getAllInCategory } from '../Actions/productActions';

class ProductPage extends Component {

componentWillMount(){
this.props.dispatch(getAllInCategory());
}

constructor(){
  super();
//  this.handleCategory = this.handleCategoryChange.bind(this);
}


handleCategoryChange = (category) =>{
  this.props.dispatch(getAllInCategory(category));
}

  render() {
    return (
      <div className="ProductPage">

        <button onClick={this.handleCategoryChange.bind(this,'fruit')}>
          Fruits!
        </button>

        <button onClick={this.handleCategoryChange.bind(this,'vegetable')}>
          Vegetables!
        </button>

        <ProductList products={this.props.products}/>

        <Link to="/basket"> Show Basket </Link>
      </div>
    );
  }

}



ProductPage.propTypes = {
  products: React.PropTypes.array,
  filtered: React.PropTypes.array
}


function mapStateToProps(store){
    return {
    products:store.products.productList,
    filtered: store.products.filteredList
  }
}

export default connect(mapStateToProps)(ProductPage);
