import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

 const particlesOption={
  particles: {
    number:{
      value:30,
      density: {
        enable:true,
        value_area:300
      }
    }
  }
}
function App() {
  return (
    <div className="App">
       <Particles  className='particles'
              params={particlesOption}
            />
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm />
      
      
    </div>
  );
}

export default App;
