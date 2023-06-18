import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { useEffect, useState } from "react";
import logo from './assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from "./Footer";
import { ErrorPage } from "./pages/ErrorPage";
// import { motion } from "framer-motion";

function App() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [bg, setBg] = useState(true);
  const [loading, setLoading] = useState(false);
  const preloader = document.getElementById('preloader');
  
  if(preloader){
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add("preloder--hidden");
        setLoading(true);
      },2000)
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 60 ? setBg(!bg) : setBg(bg)
    })
  }, [bg])

  const displayPage = () => {
    preloader.classList.remove("preloader--hidden");
    setLoading(true);
    setMenuDisplay(prevValue => !prevValue);
  }
  AOS.init()

  return (
    loading && (
      <Router>
      <div className="App box-border bg-blackk h-full font-Montserrat">
        <nav className={`${bg ? 'bg-blackk' : 'bg-black/80'} fixed top-0 w-full flex justify-between items-center transition-all duration-300 z-10 p-6 sm:px-10`}>
          <div className="">
            <img className="w-32 sm:w-40" src={logo} alt="logo" />
          </div>
          {/* menu */}
          <div className={!menuDisplay ? `hidden lg:flex ` : `active absolute top-0 left-0 right-0 lg:top-7 lg:right-10 h-screen lg:h-0 z-50 transition bg-blackk`}>
            {/* nav links */}
            <ul className="menu flex flex-col justify-center lg:justify-end lg:flex-row font-medium items-center text-xl text-center min-h-screen lg:min-h-fit gap-6">
              <li id="home" className="relative text-light-grey text-xl hover:text-white" onClick={ displayPage}>
                <NavLink to="/" onClick={() => setLoading(false)}>Home </NavLink>
              </li>
              <li id="portfolio" className="relative text-light-grey text-xl hover:text-white" onClick={ displayPage}>
                <NavLink to="/projects">Portfolio </NavLink>
              </li>
              <li id="contact" className="relative text-light-grey text-xl hover:text-white" onClick={ displayPage}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {/* social media links */}
              <section className="lg:hidden">
                <p className="flex items-center justify-center mt-6 text-white mb-4">Connect with me <i className="ri-arrow-down-line ml-2"></i></p>
                <div className="flex justify-between w-40 sm:w-48 md:w-60 mx-auto">
                  <a href="https://mobile.twitter.com/Chibuike035">
                    <i className="ri-twitter-fill text-light-grey text-2xl md:text-3xl hover:text-white"></i>
                  </a>
                  <a href="https://github.com/Jay035">
                    <i className="ri-github-fill text-light-grey text-2xl md:text-3xl hover:text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/mwlite/in/chibuike-ukandu-8385401b0">
                    <i className="ri-linkedin-fill text-light-grey text-2xl md:text-3xl hover:text-white"></i>
                  </a>
                  <a href="mailto:codexjay08@gmail.com">
                    <i className="ri-mail-line text-light-grey text-2xl md:text-3xl hover:text-white"></i>
                  </a>
                </div>
              </section>
            </ul>

            {/* close button */}
            <i onClick={() => setMenuDisplay(!menuDisplay)} className="ri-close-line lg:hidden text-light-grey hover:text-white text-6xl absolute top-6 right-4 sm:right-10 cursor-pointer"></i>

          </div>
          {/* hamburger */}
          <div onClick={() => setMenuDisplay(prevValue => !prevValue)} className="hamburger flex justify-between flex-col lg:hidden gap-1.5 cursor-pointer p-3 rounded-md">
            <span className="justify-self-start w-5 h-0.5 bg-light-grey"></span>
            <span className="w-8 h-0.5 bg-light-grey"></span>
            <span className="ml-auto mr-0 w-5 h-0.5 bg-light-grey"></span>
          </div>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    )
  );
}

export default App;
