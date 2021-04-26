import React from 'react';
import '../App.css';

function Header(props){
    // console.log(props.color)
    return(
        <header className="header" style={{backgroundColor:props.color}} > 
            Paint App
        </header>
    )
}

export default Header