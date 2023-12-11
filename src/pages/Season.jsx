import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Seasons(props) {
  const [constructorData, setConstructorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ergast.com/api/f1/2023/results/1.json"
        );
        const constructors = response.data.MRData.RaceTable.Races.slice(0, 22);
        setConstructorData(constructors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="tracks">
        <div className="container">
          <h1 className="title">2023 race results by tracks</h1>
          <ul className="list">
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[0] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[0]?.round}</p>
                  <h2 className="country">
                    {constructorData[0]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[0]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/bahrain_circuit.png`}
                  alt={`${constructorData[0]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[0]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>

            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[1] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[1]?.round}</p>
                  <h2 className="country">
                    {constructorData[1]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[1]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/saudi_circuit.png`}
                  alt={`${constructorData[1]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[1]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>

            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[2] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[2]?.round}</p>
                  <h2 className="country">
                    {constructorData[2]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[2]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/australia_circuit.png`}
                  alt={`${constructorData[2]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[2]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>

            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[3] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[3]?.round}</p>
                  <h2 className="country">
                    {constructorData[3]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[3]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/baku_circuit.png`}
                  alt={`${constructorData[3]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[3]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>

            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[4] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[4]?.round}</p>
                  <h2 className="country">
                    {constructorData[4]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[4]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/miami_circuit.png`}
                  alt={`${constructorData[4]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[4]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>

            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[5] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[5]?.round}</p>
                  <h2 className="country">
                    {constructorData[5]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[5]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/monoco_circuit.png`}
                  alt={`${constructorData[5]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[5]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[6] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[6]?.round}</p>
                  <h2 className="country">
                    {constructorData[6]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[6]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/spain_circuit.png`}
                  alt={`${constructorData[6]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[6]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[7] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[7]?.round}</p>
                  <h2 className="country">
                    {constructorData[7]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[7]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/canada_circuit.png`}
                  alt={`${constructorData[7]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[7]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[8] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[8]?.round}</p>
                  <h2 className="country">
                    {constructorData[8]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[8]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/austria_circuit.png`}
                  alt={`${constructorData[8]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[8]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[9] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[9]?.round}</p>
                  <h2 className="country">
                    {constructorData[9]?.Circuit.Location.locality}
                  </h2>
                  <p className="text">{constructorData[9]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/great_britain_circuit.png`}
                  alt={`${constructorData[9]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[9]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[10] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[10]?.round}</p>
                  <h2 className="country">
                    {constructorData[10]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[10]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/hungary_circuit.png`}
                  alt={`${constructorData[10]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[10]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[11] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[11]?.round}</p>
                  <h2 className="country">
                    {constructorData[11]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[11]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/belgium_circuit.png`}
                  alt={`${constructorData[11]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[11]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[12] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[12]?.round}</p>
                  <h2 className="country">
                    {constructorData[12]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[12]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/netherlands_circuit.png`}
                  alt={`${constructorData[12]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[12]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[13] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[13]?.round}</p>
                  <h2 className="country">
                    {constructorData[13]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[13]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/italy_circuit.png`}
                  alt={`${constructorData[13]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[13]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[14] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[14]?.round}</p>
                  <h2 className="country">
                    {constructorData[14]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[14]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/singapore_circuit.png`}
                  alt={`${constructorData[14]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[14]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[15] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[15]?.round}</p>
                  <h2 className="country">
                    {constructorData[15]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[15]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/japan_circuit.png`}
                  alt={`${constructorData[15]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[15]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[16] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[16]?.round}</p>
                  <h2 className="country">
                    {constructorData[16]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[16]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/qatar_circuit.png`}
                  alt={`${constructorData[16]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[16]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[17] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[17]?.round}</p>
                  <h2 className="country">
                    {constructorData[17]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[17]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/usa_circuit.png`}
                  alt={`${constructorData[17]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[17]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[18] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[18]?.round}</p>
                  <h2 className="country">
                    {constructorData[18]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[18]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/mexico_circuit.png`}
                  alt={`${constructorData[18]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[18]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[19] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[19]?.round}</p>
                  <h2 className="country">
                    {constructorData[19]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[19]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/brazil_circuit.png`}
                  alt={`${constructorData[19]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[19]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[20] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[20]?.round}</p>
                  <h2 className="country">
                    {constructorData[20]?.Circuit.Location.country}
                  </h2>
                  <p className="text">{constructorData[20]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/las_vegas_circuit.png`}
                  alt={`${constructorData[20]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[20]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
            <li className="item">
              <Link
                to={`/Results/`}
                state={{ seasonData: constructorData[21] }}
                className="custom-link"
              >
                <div className="">
                  <p className="text">Round {constructorData[21]?.round}</p>
                  <h2 className="country">
                    {constructorData[21]?.Circuit.Location.locality}
                  </h2>
                  <p className="text">{constructorData[21]?.date}</p>
                  <div className="line"></div>
                </div>
                <img
                  src={`/images/circuit/abu_dhabi_circuit.png`}
                  alt={`${constructorData[21]?.Circuit.circuitName}`}
                  className="pic"
                />
                <div className="winner">
                  <img
                    src={`/images/trophy.png`}
                    alt="trophy"
                    className="trop"
                  />
                  <p className="win">
                    {constructorData[21]?.Results[0].Driver.familyName}
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
