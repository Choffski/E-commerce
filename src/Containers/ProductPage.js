import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';



import { getProducts, getAllInCategory, search } from '../Actions/productActions';

class ProductPage extends Component {
 /// Lifecycle Events
componentWillMount(){
this.props.dispatch(getAllInCategory());
}

// Functions

handleCategoryChange = (category) =>{
  this.props.dispatch(getAllInCategory(category));
  this.props.dispatch(search());
}
navigateToBasket = () => {
hashHistory.push('/basket')
};

handleSearch = (val) =>{
  this.props.dispatch(search(val));
}

  render() {
    return (
      <div className="product-page-container">


        <Header handleClick={this.navigateToBasket} basketItems={this.props.products.length}/>

      <div className="product-page-body">


        <Sidebar handleChange={this.handleCategoryChange}/>
        {
          this.props.shouldFilter?
          <ProductList searchValue={this.props.searchInput} handleSearch={this.handleSearch} products={this.props.filtered}/>
          :
          <ProductList searchValue={this.props.searchInput} handleSearch={this.handleSearch} products={this.props.products}/>
        }

      </div>

    </div>
    );
  }

}



ProductPage.propTypes = {
  products: React.PropTypes.array,
  filtered: React.PropTypes.array,
  shouldFilter: React.PropTypes.bool,
  searchInput: React.PropTypes.string
}
function mapStateToProps(store){
    return {
    products:store.products.productList,
    filtered: store.products.filteredList,
    shouldFilter: store.products.filtersApplied,
    searchInput: store.products.searchInput
  }
}

export default connect(mapStateToProps)(ProductPage);
