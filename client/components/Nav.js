import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    const {
      products,
      location: { pathname },
    } = this.props;
    const links = [
      { text: 'Home', to: '/' },
      { text: `Products (${products.length})`, to: '/products' },
      { text: 'Create A Product', to: '/products/create' },
    ];
    return (
      <div id="nav">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className={pathname === link.to ? 'active' : ''}
          >
            {link.text}
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(Nav);
