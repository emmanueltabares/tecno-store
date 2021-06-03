import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
/* import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from "./components/ItemDetailContainer"
import Item from './components/Item'; */

function App() {
  return (

    <> 
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer />
          </Route>
          {/* <Route exact path="/itemDetailContainer">
            <ItemDetailContainer />
          </Route> */}


        </Switch>
        
        
      </BrowserRouter>
      
      
    </>
    
  );
}

export default App;
