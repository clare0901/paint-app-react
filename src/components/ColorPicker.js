import React from 'react';
import '../App.css'

function ColorPicker(props){
    // console.log(props)
    if (!props.colors.length) return null;
    return(
        <fieldset className="color-picker">
            {props.colors.map( (color,id) => (
                <label key={id}>
                    <input 
                    ref={props.colorpickerRef}
                    type="radio"
                    name="color"
                    value={color}
                    checked={props.activeColor === color}
                    onChange={ () => props.setActiveColor(color)}
                    />
                    <span style={{ background:color }}></span>
                </label>
            ))}
        </fieldset>
    )
}

export default ColorPicker;