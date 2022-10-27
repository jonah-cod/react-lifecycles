import './App.css';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import Products from './products';


function App() {



  return (
    <Routes>
      <Route path='/' element={<div className="App">
        <div className="navbar">
          <h4>E-store</h4>
        </div>
        <div className="container">
          <div className="side-bar">
            <Link to="/women's clothing"> Women Clothing</Link>
            <Link to="electronics">Electronics</Link>
            <Link to="/men's clothing">Men Clothing</Link>
            <Link to="/jewelery">Jewelery</Link>
          </div>
          <div className="products-container">
            <Outlet/>
          </div>
        </div>
      </div>}>
        <Route index element={<Products />} />
        <Route path='/:category' element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
