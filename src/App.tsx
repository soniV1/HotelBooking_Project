import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/styles.scss'; 
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
   <>
   <Header/>
   <Home/>
   <Footer/>
   </>
  );
}

export default App;
