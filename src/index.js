import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Product/Home';
import Blog from './components/Blog/Index';
import Detail from './components/Blog/Detail';
import Login from './components/Member/Login';
import Register from './components/Member/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/blog/list' element={<Blog />} />
          <Route path='/blog/detail/:id' element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
