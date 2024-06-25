import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navigation/NavBar';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';
import './App.css';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<Category />} />
          <Route exact path="/product/:prodId" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
