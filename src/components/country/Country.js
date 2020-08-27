import React from 'react';

// data recv korte props use parameter hisabe use korte hoy
const Country = (props) => {
    const{name, population, region,flag} = props.country;
    const flagStyle = {height:'50px'}
    const backStyle = {border:'1px solid teal', margin:'10px', padding:'10x'}
    const buttonMar = {marginBottom:'5px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={backStyle}>
            <h4>this is :{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>{population}</h3>
            <h5>region:{region}</h5>
            <button onClick={() => handleAddCountry(props.country)} style={buttonMar}>Add country</button>
            
            
        </div>
        // props.name ar name ta aseche app.js a amra map funtion ata assing korechilam : name=country.name

         // kono event handler maje parameter pass korte hole arrow function use korte hoy.
    );
};

export default Country;