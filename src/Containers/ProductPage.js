import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getProducts } from '../Actions/productActions';

class ProductPage extends Component {

componentWillMount(){

this.props.dispatch(getProducts());

}

  render() {
    return (
      <div className="ProductPage">

        <h1>This is ProductPage</h1>

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
