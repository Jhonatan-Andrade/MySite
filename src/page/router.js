import React,{useState,useEffect} from 'react';
import './styleglobal.css';

import Menu from './menu/index';
import Home from './home';
import About from './about';




function Router() {
  const { innerWidth: width} = window;
  const [menuWidth,setMenuWidth]= useState(true)
  useEffect(()=>{
    if(width < 750){setMenuWidth(false)}
  },[])
  
  return (
    <>
      <Menu/>
      <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
  );
}

export default Router;
