import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './components/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
