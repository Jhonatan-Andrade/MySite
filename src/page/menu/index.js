
import  './styles.css';

import MenuHamburguer from './botton'
import MenuBox from './box'

import React, {useState,useEffect} from 'react';

function Menu({children,navigation}) {

    const [menuWidth,setMenuWidth]= useState(true)
    const [menu,setMenu]= useState(false)

    const { innerWidth: width} = window;

    useEffect(()=>{
        if(width < 750){setMenuWidth(false)}
    },[])

    function menuClassName() {
        if (!menuWidth) {
            if (menu) {
                return 'menu mobile open'
            }else{
                return 'menu mobile'
            }
        }else{
            return 'menu computer'
        }
    }
    function menuClick() {
            if (menu) {
                setMenu(false)
            }else{
                setMenu(true)
            }
    }
    return(
        <main className="conteiner">
            <header className={menuClassName()} >  
                <a onClick={()=>{menuClick()}}>
                    <MenuHamburguer menuValue={menu}/>
                </a>
                <MenuBox navigation={(props)=>{setMenu(false);navigation(props)}}/>
            </header>
            <div className="box">
              {children}
            </div>
        </main>
    )
}
export default Menu
