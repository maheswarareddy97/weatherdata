import React, { useState } from 'react'
import './index.css';

const App = () => {
  const [city,setCity]=useState('');
  const [result,setResult]=useState([]);

  const changeHandler= (e) => {
    setCity(e.target.value);
  }

  const submitHandler= e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      responce=> responce.json()
    ).then (
      data=> {
        const kelvin=data.main.temp
      const celcius= kelvin-273.15;
      setResult( "Tempurature At" + " "+ city + '\n'+ Math.round(celcius)+ '°C');
      }

    ).catch(error=> console.log(error))
    setCity('');
  }
  return (
    <div >
      <center> 
        <div className='card'>
          <div className='card-body'> 
          <span style={{color:'blue'}}> <h3> WEATHER DATA </h3> </span>
          <form onSubmit={submitHandler}> 
            <input type='text' name='city' 
            value={city} onChange={changeHandler}/> <br/><br/> 
             <input type='submit' value='Get Temperature'/>
          
          </form>
          </div>
          <span style={{color:'red'}}>
          <h1> {result}</h1>
          </span>

        </div>
      </center>
      
    </div>
  )
}

export default App;
