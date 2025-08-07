import React from 'react'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './Components/Services';
import ServiceList from './Pages/ServiceList';
import Bookings from './Components/Bookings';
import List from './Components/List';
import Blogs from './Components/Blogs';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <Services />
            </>
          } />
          <Route path='/booking' element={<Bookings/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/Blogs' element={<Blogs/>}></Route>
          <Route path="/:Service" element={<ServiceList />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App