import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/country/Country';
import Cart from './components/Cart/Cart';

function App() {

const [countries, setCountries] = useState([]);
const [cart, setCart] = useState([]);

useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data =>setCountries(data))
}, [])

const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
}

  return (
    <div className="App">
      <h1>countries Loaded: {countries.length}</h1>
       <h2>country added: {cart.length}</h2>
       <Cart cart={cart}></Cart>
      
        {
          // country.js a data pass ar jonno amra map funtion use korbo, ja send korte chai ta likhe divo, like akahne amra country name send korte chai

          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)

          // key deya hoyecha coz ata unique kicho dite noila console a error dekhay.
        }
      


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
