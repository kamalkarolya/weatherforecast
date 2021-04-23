import React, { useEffect, useState } from 'react';
import './App.css';

import { week, months, dates, hrs, mins, session } from './Info';

const App = () => {

  const [loca, setLoca] = useState(" Delhi");
  const [city, setCity] = useState(null);
  // const [citi, setCiti] = useState(null);
  const inputs = (event) => {
    var data = event.target.value;
    setLoca(data);
  }
  useEffect(() => {
    const fetchApi = async () => {
      
       const response = await fetch(ABHI-IMPORT-KRNA-H);
     

      const jsonres = await response.json();
      //  console.log(jsonres.main.temp);

      setCity(jsonres.main);
      // setCiti(jsonres.weather);
      
    }
    fetchApi();
  }, [loca]);


  return (<>
    <div className="box">
      <div className="wave  wave1"></div>
      <div className="wave  wave2"></div>
      <div className="wave wave3"></div>
      <div className="inputs"  > <input className="forum" placeholder="Your Location" value={loca} onChange={inputs} /> </div>

      {!city ? (<p className="error" >No Data Found </p>) : (
        <>
          <div id="indicator" >
            <i className='fas fa-sun' ></i>
          </div>
          <div className="info">
            <h2 className="location" > <i id className="fas fa-street-view"></i> {loca} </h2>
            <p id="date"> {week} | {months},{dates} | {hrs}:{mins} {session}  </p>
            <h1 className="temp" >  {city.temp} &deg;C </h1>
            {/* <p className="status" > </p> */}
            <h3 className="tempvar" >MAX {city.temp_max} &deg;C | MIN {city.temp_min} &deg;C </h3>
          </div>

        </>

      )}

    </div>
  </>
  );
}

export default App;
