import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router'

import  BasketContainer  from './Containers/BasketContainer';
import  BasketPayment  from './Containers/BasketPayment';
import  BasketShipping  from './Containers/BasketShipping';
import  BasketSummary  from './Containers/BasketSummary';
import BasketView  from './Containers/BasketView';
import ProductPage  from './Containers/ProductPage';

class Routing extends Component {
  render() {
    return (

      <Router history={hashHistory}>
        <Route path='/products' component={ProductPage}></Route>
        <Route path='/basket' component={BasketContainer}>
          <IndexRoute  component={BasketView}></IndexRoute>
          <Route path="/shipping" component={BasketShipping}></Route>
          <Route path="/payment" component={BasketPayment}></Route>
          <Route path="/summary" component={BasketSummary}></Route>
        </Route>
        <Redirect from="/" to="/products"></Redirect>
      </Router>
    );
  }
}

export default Routing;
