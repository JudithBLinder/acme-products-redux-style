import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts } from '../actions';

class Products extends Component {
  render() {
    const { products, destroy } = this.props;
    return (
      <div>
        <h2>Products</h2>
        <ul id="products">
          {products.map((product) => (
            <li key={product.id}>
              <div>{product.name}</div>
              <button id={product.id} onClick={destroy}>
                Destroy
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    destroy: async (ev) => {
      try {
        await axios.delete(`/api/products/${ev.target.id}`);
        const products = await (await axios.get(`/api/products`)).data.products;
        await dispatch(getProducts(products));
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
