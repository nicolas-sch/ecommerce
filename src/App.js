import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
