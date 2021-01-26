import React,{useState} from 'react';
import './styleglobal.css';
import Menu from './menu/index';
import Home from './home';
import About from './about';
import Tecnologia from './tecnologia';



function Router() {

  const [page,setPage]= useState('home')

  const onNavigation = (pageName)=>{ 
    setPage(pageName) ;
  }

  const Load = ()=>{
    if (page==='home') {
      return <Home/>
    }
    if (page==='about') {
      return <About/>
    }
    if (page==='services') {
      return <Tecnologia/>
    }
  }
  return (
    <>
      <Menu textContrast={page} navigation={(props)=>{onNavigation(props)}}>
        <Load/>
      </Menu>
    </>
  );
}

export default Router;
