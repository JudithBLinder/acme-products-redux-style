import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import { getProducts } from './actions';
import Nav from './components/Nav';
import Products from './components/Products';
import ProductCreate from './components/ProductCreate';

const Home = () => <h2>Home</h2>;

class App extends Component {
  async componentDidMount() {
    try {
      const response = await axios.get('/api/products');
      store.dispatch(getProducts(response.data.products));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <h1>Acme Products</h1>
          <Route component={Nav} />
          <div id="content">
            <Route exact path="/" component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/create" component={ProductCreate} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
