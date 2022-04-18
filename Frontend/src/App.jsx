import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/navbar/Navbar';
import {Home} from './components/home/Home';

import {Flat} from './components/flatdetails/Flat';
import {FlatDetails} from './components/flatdetails/FlatDetails';

import {Login} from './components/login/login';
import {Register} from './components/register/register';
import {PrivateRoute} from './components/routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/flat" element={<PrivateRoute><Flat /></PrivateRoute>}></Route>
        <Route path="/flat/:id" element={<PrivateRoute><FlatDetails /></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App