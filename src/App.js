import React from 'react';
import Heder from './pages/Heder'
import './staill/App.css'
import PidHed from './pages/PidHed';
import MenuList from './pages/MenuList';
import Footer from './pages/Footer';
import photo1 from "./png/Photo/photo1.jpg"
import photo2 from "./png/Photo/photo2.jpg"
import photo3 from "./png/Photo/photo3.png"

const Photos = [{photo1},{photo2},{photo3}]
 
Photos.forEach( photo => App(photo) );


function App(photo) {
  return (
    <div className="App">
      <div>
      <Heder/>
      </div >
      <div className='pidhedposishn'>
      <PidHed/>
      </div>
      <MenuList/>
      <Footer/>
    </div>
  );
}

export default App;
