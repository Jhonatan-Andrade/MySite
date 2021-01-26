import React, {useState,useEffect} from 'react';
import  './mobile.css';

const OpenMenu = ({menuValue})=>{
    return(
        <label className={menuValue?'label':'label labelopen'} >
            <span className={menuValue?'spanCloseFirst open':'spanOpenFirst close'}></span>
            <span className={menuValue?'spanCloseSecond open':'spanOpenSecond close'}></span>
            <span className={menuValue?'spanCloseThird open':'spanOpenThird close'}></span>
        </label>
    )
}

export default OpenMenu
