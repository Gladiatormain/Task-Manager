import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import Navbar from './components/Navbar';
import { Todos } from './components/Todos';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/UpdateProfile';
import MyProfile from './components/MyProfile';
import { useState } from 'react';
import Logout from './components/Logout';
import Signout from './components/Signout';
import Contact from './components/Contact';
const Render = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <Todos />
      <Footer />
    </>
  )
}
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </> :
    <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isuserAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login isuserAuthenticated={isuserAuthenticated} />} />

        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/' element={<Render />} />
        </Route>
        <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/myprofile' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/myprofile' element={<MyProfile />} />
        </Route>
          <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Signout />} />

      </Routes>
    </Router>

    // <Router>
    //   <Routes>
    //       <Route path='/' element={<Render/>}></Route>
    //       <Route path='/register' element={<Register/>}></Route>
    //       <Route path='/login' element={<Login/>}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
