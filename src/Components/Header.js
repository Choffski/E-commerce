import React, { Component } from 'react';

import Badge from 'material-ui/Badge';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const btnStyle = {
  medium:{
    width: 80,
    height: 80,
    padding: 20,
  },
  mediumIcon: {
  width: 40,
  height: 40,
},
}




class Header extends Component {

  getChildContext() {
              return { muiTheme: getMuiTheme(baseTheme) };
          }


  render() {
    return (

      <div className="product-page-header">

          <div className="product-page-header-left">
              <h1> Fruit e-commerce </h1>
          </div>

          <div className="product-page-header-right">
            <Badge
                 badgeContent={this.props.basketItems}
                  secondary={true}
                  badgeStyle={{top: 35 , right: 35}}>

              <IconButton
                iconStyle={btnStyle.mediumIcon}
                style ={btnStyle.medium}
                onTouchTap={this.props.handleClick}>
                <ShoppingCart/>
              </IconButton>

              </Badge>
        </div>

      </div>

    );
  }

}


Header.childContextTypes = {
         muiTheme: React.PropTypes.object.isRequired,
     };

export default Header;
