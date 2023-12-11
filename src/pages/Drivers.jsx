import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardDriver from './components/drivers';

export default function Drivers (props) {

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        axios
          .get("http://ergast.com/api/f1/2023/driverStandings.json")
          .then((response) => {
            const standings = response.data.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
            setDrivers(standings);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <>
        <section class="top-drivers">
            <h1>F1 DRIVERS 2023</h1>
            <h2>Check out the official line-up of the 2023 season </h2>
        </section>
        <section className="middle-drivers">
        {drivers.map((driver, index) => (
        index < 3 && (
            <CardDriver
                key={driver.Driver.driverId}
                standing={`${index + 1}e`}
                points={`${driver.points}pts`}
                driverSurname={driver.Driver.givenName.toUpperCase()}
                driverName={driver.Driver.familyName.toUpperCase()}
                flagPath={`/images/flags/${driver.Driver.nationality.toLowerCase()}.png`}
                driverPath={`/images/${driver.Driver.driverId.toLowerCase()}.png`}
                
            />
        )
        ))}
        </section>
        <section class="middle-drivers-btm">
        {drivers.map((driver, index) => (
        index >= 3 && (
            <CardDriver
                key={driver.Driver.driverId}
                standing={`${index + 1}e`}
                points={`${driver.points}pts`}
                driverSurname={driver.Driver.givenName.toUpperCase()}
                driverName={driver.Driver.familyName.toUpperCase()}
                flagPath={`/images/flags/${driver.Driver.nationality.toLowerCase()}.png`}
            />
        )
        ))}
        </section>
        
        <section class="driver-historic">
            <section class="left">
                <h1>Racing Through Time: Unearthing</h1>
                <h2>the Legends of Historic Formula 1 Grand Prix!</h2>
                <p>Dive into the Golden Era of Formula 1 with our meticulously curated page showcasing the thrilling race rankings from the 1960s to the 1990s. Immerse yourself in the intense competition and iconic moments as you explore the historic Grand Prix standings that defined an era of motorsport excellence. From legendary rivalries to unforgettable victories, this collection of race rankings is a nostalgic journey through the annals of Formula 1 history, capturing the speed, drama, and triumph of a bygone era.</p>
                <button href="">WATCH NOW</button>
            </section>
            <section class="right">
            </section>
        </section>
        </>
    );
}