import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/CartPage';
import ThankYouPage from './components/ThankyouPage';

import './App.css';

const App = () => (
  <div className="main-container">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/thankYou/:name' element={<ThankYouPage />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </div>
);

export default App;
