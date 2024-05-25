import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route 
            path="/" 
            element={
              <RequireAuth>
                <>
                  <Navbar />
                  <Hero />
                  <div className="container">
                    <Title subTitle="Our Program" title="What We Offer" />
                    <Programs />
                    <About setPlayState={setPlayState} />
                    <Title subTitle="Gallery" title="Campus Photos" />
                    <Campus />
                    <Title subTitle="TESTIMONIALS" title="What Student Says" />
                    <Testimonials />
                    <Title subTitle="Contact Us" title="Get in Touch" />
                    <Contact />
                    <Footer />
                  </div>
                  <VideoPlayer playState={playState} setPlayState={setPlayState} />
                </>
              </RequireAuth>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
