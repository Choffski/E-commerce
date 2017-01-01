import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import { green500 } from 'material-ui/styles/colors';


const btnStyle = {
  small:{
    width: 60,
    height: 60,
    padding: 15,
  },
  smallIcon: {
  width: 30,
  height: 30,
  }
}




class AddToCartButton extends Component {


getChildContext() {
return { muiTheme: getMuiTheme(baseTheme) };
}


  render() {
    return (

      <IconButton
        onTouchTap={this.props.clickHandler}
        style={btnStyle.small}
        iconStyle={btnStyle.smallIcon}
        tooltip="Add to cart">
        <AddShoppingCart color={green500} />
      </IconButton>

    );
  }

}


AddToCartButton.childContextTypes = {
         muiTheme: React.PropTypes.object.isRequired,
     };

export default AddToCartButton;
