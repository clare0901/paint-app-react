import React from 'react';

const RefreshButton = ((props) =>{
    return(
        <button className="refresh" onClick={props.cb} title="Change Color" >
            <img src="https://img.icons8.com/windows/32/000000/refresh.png" alt="Refresh-Icon" />
        </button>
    )
})

export default RefreshButton