import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Search  from 'material-ui/svg-icons/action/search'



const iconStyles = {
      top: '3px',
      right: '35px',
      height: '30px',
      width: '30px',
      position: 'relative'
    };

class FilterBar extends Component {

  getChildContext() {
              return { muiTheme: getMuiTheme(baseTheme) };
          }


  render() {

    return (
      <div className="filter-bar">

        <input type="text" name="searchInput" value={this.props.value} placeholder="Search for a product" onChange={this.props.handleSearch} />
        <Search style={iconStyles} />
      </div>
    );
  }
}

FilterBar.childContextTypes = {
         muiTheme: React.PropTypes.object.isRequired,
};

export default FilterBar;
