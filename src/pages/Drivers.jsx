import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Drivers (props) {

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
    axios
        .get("https://ergast.com/api/f1/2020/drivers.json")
        .then((response) => {
        setDrivers(response.data.MRData.DriverTable.Drivers);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    return (
        <>
            <h1>Page Drivers</h1>
            <ul>
                {drivers.map((driver) => {
                    return <li key={driver.driverId}>{driver.givenName} {driver.familyName}</li>;
                })}
            </ul>
        </>
    );
}