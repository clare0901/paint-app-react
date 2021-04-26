import React, { useState } from 'react';

// used React.memo to avoid multiple rendering unneccesarily even though the state doesn't change

const Name = React.memo( (props) => {
    // console.log(props);
    const [name, setName] = useState('');

    function handleChange(event){
        setName(event.target.value)
    }
    
    // upon one click the whole text will be selected
    function handleClick(event){
        return(
            event.target.setSelectionRange(0,event.target.value.length)
        );
    }
    
    return(
        <div>
            <div className="name">
                <input 
                ref={props.nameRef}
                type="text"
                value={name}
                placeholder="Unititled"
                onChange={handleChange}
                onClick={handleClick}
                />
            </div>
        </div>
    )
} )

export default Name;