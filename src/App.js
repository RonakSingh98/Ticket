import React from 'react';
import './App.css';
import Apps from './Content';
import Checkout from './checkout';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import Login from './login';
import MyOrders from './Myorders';
import TicketUploadForm from './Eventnew';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* <ul>
            <li><Link to="/">Apps</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul> */}
        </nav>
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/newevent" element={<TicketUploadForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
