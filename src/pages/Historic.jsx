import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Historic (props) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/1988/11/results.json?limit=40'
        );
        const results = response.data.MRData.RaceTable.Races[0].Results;
        setResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const displayTimeOrStatus = (result) => {
    if (result.Time && result.Time.time) {
      return <h4 className='stats'>{result.Time.time}</h4>;
    } else {
      return <h4 className='stats'>{result.status}</h4>;
    }
  };

  return (
    <>
        <div className='historicontainer'>
            <div className='presentation'>
              <div className='img'>
                <h1>1988 FORMULA ONE<br/>Belgian Grand Prix</h1>
              </div>
            </div>
        </div>
        <div className='result'>
          <div className="table">
            <div className='columname'>
              <h3 className='pos'>POS</h3>
              <h3 className='num'>N°</h3>
              <h3 className='name'>DRIVER</h3>
              <h3 className='car'>CAR</h3>
              <h3 className='laps'>LAPS</h3>
              <h3 className='stats'>TIME/RETIRED</h3>
              <h3 className='pts'>PTS</h3>
            </div>
            {results.map((result, index) => (
              <div key={index} className={`driveresult ${index % 2 === 0 ? 'gray' : ''}`}>
                <h4 className='pos'>{result.position}</h4>
                <h4 className='num'>{result.number}</h4>
                <h4 className='name'>{result.Driver.givenName} {result.Driver.familyName}</h4>
                <h4 className='car'>{result.Constructor.name}</h4>
                <h4 className='laps'>{result.laps}</h4>
                {displayTimeOrStatus(result)}
                <h4 className='pts'>{result.points}</h4>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}