import React from 'react';

const ClearButton = ((props) =>{
    return(
        <button className="clear" onClick={props.cb} title="Clear Screen" >
            <img src="https://img.icons8.com/material-sharp/30/000000/delete-trash.png" alt="Clear-Icon" />
        </button>
    )
})

export default ClearButton