import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const displayTimeOrStatus = (result) => {
    if (result.Time && result.Time.time) {
      return <td className="center">{result.Time.time}</td>;
    } else {
      return <td className="center">{result.status}</td>;
    }
  };

export default function Results(props) {
  const location = useLocation();
  const { seasonData } = location.state || {};
  const [constructorData, setConstructorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const apiUrl = 'https://ergast.com/api/f1/2023/' + seasonData.round + '/results.json';
          const response = await axios.get(apiUrl);
          console.log('API Response:', response);
  
          const constructors = response.data.MRData.RaceTable.Races[0].Results;
          setConstructorData(constructors);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
        fetchData();    
  }, [seasonData]);

  return (
    <section className="results">
      <div className="container">
        <div className="flex">
          <h1 className="title"> 
            {seasonData.raceName} <br />
            <span>{seasonData.Circuit.circuitName}</span>
          </h1>
          <img
            src={`/images/flags/${seasonData.Circuit.Location.country}_flag.png`}
            alt={`${seasonData.Circuit.Location.country}`}
            className="flag"
          />
        </div>
        <table className="infos">
          <thead>
            <tr>
              <th>Pos</th>
              <th>N <sup></sup></th>
              <th>Driver</th>
              <th>Constructor</th>
              <th className="center">Laps</th>
              <th className="center">Time/Retired</th>
              <th className="center">Points</th>
            </tr>
          </thead>
          <tbody>
            {constructorData.map((result, index) => (
                <tr key={index} className={`driveresult ${index % 2 === 0 ? 'gray' : ''}`}>
                    <td className="pad wid">{result.positionText}</td>
                    <td className="wid">{result.Driver.permanentNumber}</td>
                    <td>{result.Driver.givenName} {result.Driver.familyName}</td>
                    <td>{result.Constructor.name}</td>
                    <td className="center">{result.laps}</td>
                    {displayTimeOrStatus(result)}
                    <td className="center">{result.points}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

