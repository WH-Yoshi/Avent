import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Historic (props) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/1988/11/results.json'
        );
        const results = response.data.MRData.RaceTable.Races[0].Results;
        setResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className='historicontainer'>
            <div className='presentation'>

            </div>
        </div>
        <div className='results'>
          <div className='title'>
            <h1>1993 FORMULA ONE<br/>Belgian Grand Prix</h1>
          </div>
          <div className="table">
            {/* {results.map((result, index) => (
              <div key={index}>
                <h2>{result.Driver.givenName} {result.Driver.familyName}</h2>
                <p>Position: {result.position}</p>
                <p>Points: {result.points}</p>
              </div>
            ))} */}
          </div>
        </div>
    </>
  )
}