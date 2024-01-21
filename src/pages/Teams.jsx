import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Teams () {

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
      <div className='teamstand'>
        <h1>2023 FORMULA ONE<br/>TEAMS STANDINGS</h1>
        <div className='container'>
          <div className="team">
            <div className='logoname RB'>
              <img
                src={`/images/redbull.png`}
                alt={`${constructorData[0]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[0]?.Constructor.name} RACING</h2>
            </div>
            <div className='points'>
              <p>{constructorData[0]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname MERC'>
              <img
                src={`/images/mercedes.png`}
                alt={`${constructorData[1]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[1]?.Constructor.name}-AMG</h2>
            </div>
            <div className='points'>
              <p>{constructorData[1]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname FER'>
              <img
                src={`/images/ferrari.png`}
                alt={`${constructorData[2]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[2]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[2]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname MC'>
              <img
                src={`/images/mclaren.png`}
                alt={`${constructorData[3]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[3]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[3]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname AM'>
              <img
                src={`/images/astonmartin.png`}
                alt={`${constructorData[4]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[4]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[4]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname ALP'>
              <img
                src={`/images/alpine.png`}
                alt={`${constructorData[5]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[5]?.Constructor.constructorId}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[5]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname WILL'>
              <img
                src={`/images/williams.png`}
                alt={`${constructorData[6]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[6]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[6]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname ALPHA'>
              <img
                src={`/images/alphatauri.png`}
                alt={`${constructorData[7]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[7]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[7]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname ALFA'>
              <img
                src={`/images/alfaromeo.png`}
                alt={`${constructorData[8]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[8]?.Constructor.name}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[8]?.points}</p>
            </div>
          </div>

          <div className="team">
            <div className='logoname HAAS'>
              <img
                src={`/images/haas.png`}
                alt={`${constructorData[9]?.Constructor.name} Logo`}
              />
              <h2>{constructorData[9]?.Constructor.constructorId}</h2>
            </div>
            <div className='points'>
              <p>{constructorData[9]?.points}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}