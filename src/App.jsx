import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';  // Asegúrate de que esta ruta sea correcta

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    );
}

export default App;



















/* import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navigation/NavBar';
import ItemDetail from './components/ItemDetail';
import './App.css';
<<<<<<< HEAD

=======
>>>>>>> 0db5dca0d084e70d25b8a1f0d0995af0d78eb981

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/product/:prodId" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 */