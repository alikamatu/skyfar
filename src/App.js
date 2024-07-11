import React, { useContext } from 'react';
import './App.scss'
import Footer from './components/footer/Footer';
import { DarkModeContext } from './components/darkModeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {
  // const [theme, setTheme] = useState('theme-default');

const {darkMode} = useContext(DarkModeContext);


  return (
    <div className={`theme-${darkMode? "light" : "dark"}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
