
import './App.css';

import {useState} from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');




  
  const getWeather = (e) =>{
   
      axios
    
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=32c1c0f82a8de6539b1e236714a9b387`)
    .then(res=>{
      setWeather(res.data);
      console.log(res.data);
    })
    
    
    
  }
 



  return (
    <div className="App">
      <div className="pp">
      <div className = "main-page">

      
     

    
    
      </div>
      
          <div className = "main-center">
          <div className = "searchButton"> <input className="searchButton" value={search} placeholder="Location" onChange={e=> setSearch(e.target.value)} type = 'text'/> 
           </div>

          <div className='sButton'><button className="searchButton"  onClick={getWeather}> search </button></div> 
        
                  
          </div>
      </div>

      <div className='info-container'>  </div> 

      <div className="sub-name">  <h1> {weather.name}</h1> </div> 

      <div className="sub-info">
              
                 
                 <h2>  {weather.main ? weather.main.temp : null} °F </h2>   
                  
                 
      
      </div> 
      
          
    </div>

    
  );
}

export default App;
