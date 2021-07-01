import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
