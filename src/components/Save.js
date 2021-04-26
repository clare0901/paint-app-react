import React from 'react';

const Save = ((props) =>{
    // console.log(props.value.value);
    return(
        <button className="save" onClick={props.cb} title="Download" >
            <a id="downloads" download={props.value.value}></a>
            <img src="https://img.icons8.com/android/32/000000/download.png" alt="Download_Image" />
        </button>
    )
})

export default Save;