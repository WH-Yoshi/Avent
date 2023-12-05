import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Historic (props) {

  const [constructorData, setConstructorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/2023/constructorstandings.json'
        );
        const constructors = response.data.MRData.StandingsTable.StandingsLists[0]
          .ConstructorStandings.slice(0, 10);
        setConstructorData(constructors);
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
                <h1>Grand Prix</h1>
            </div>
        </div>
    </>
  )
}