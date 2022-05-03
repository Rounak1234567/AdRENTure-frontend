
import './App.css';
import {Route,BrowserRouter, Routes, Navigate} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BookingCar } from './pages/BookingCar';
import React from 'react';
import 'antd/dist/antd.css';
import {UserBookings} from './pages/UserBookings';

function App() {


  function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return( <Routes>
        <Route {...props}/>
      </Routes>
      
      )
    }
    else{
      return <Navigate to='/login'/>
    }

}
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/booking/:carid/' element ={<BookingCar/>}/>
        <Route path='/userbookings' element ={<UserBookings/>}/>
      </Routes>
      
        
      </BrowserRouter>
    </div>
  );
}

export default App;



