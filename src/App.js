
import React, { useState } from 'react';
import './App.css';
import CardSection from './components/Cards/CardSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar count={count} />
      <Header />
      <CardSection count={count} setCount={setCount} />
      <Footer />
    </>
  );
};

export default App;
