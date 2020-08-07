import React from 'react';

const Select = ({ options, handleChange, label }) => (

    <div className="select-container">

        <h3 className="label">{label}</h3>

        <div className="select">
            
            <select name="select-type" id="select-type" onChange={ handleChange }>
            
                <option value="">Todos os tipos</option>
              
                {options.map( (option, index )=> {
                    return <option key={index} value={option}>{option}</option>
                })}

            </select>

        </div>

    </div>
    
);

export default Select;
