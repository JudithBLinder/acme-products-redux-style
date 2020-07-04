import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProduct, getProducts } from '../actions';
import store from '../store';
import axios from 'axios';

class ProductCreate extends React.Component {
  render() {
    const { name, onSubmit, onChange } = this.props;
    return (
      <div>
        <h2>Create A Product</h2>
        <form onSubmit={onSubmit}>
          <input
            name="name"
            onChange={onChange}
            value={name}
            placeholder="enter a new product"
          />
          <button disabled={!name}>Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (ev) => {
      dispatch(setProduct(ev.target.value));
    },
    onSubmit: async (ev) => {
      ev.preventDefault();
      const res = await axios.post('/api/products', {
        name: store.getState().name,
      });
      await dispatch(setProduct(''));
      const products = await (await axios.get(`/api/products`)).data.products;
      await dispatch(getProducts(products));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
