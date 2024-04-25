import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/products" component={ProductsList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
