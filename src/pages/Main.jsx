import { Link } from 'react-router-dom';

export default function Main(props) {
  return(
    <>
      <section className="main">
            <article className="title">
                <h1>DRIVER STANDINGS 2023</h1>
            </article>
            <section className="drivers">
                <article className="drivers-second">
                    <article className="top">
                        <img className="perez" src="/images/perez.png" ></img>
                    </article>
                    <article className="btm">
                        <article className="btm-left">
                            <article className="btm-left-lft">
                                <h1>11</h1>
                            </article>
                            <article className="btm-left-rght">
                                <h2>SERGIO</h2>
                                <h1>PEREZ</h1>
                            </article>
                        </article>
                        <article className="btm-right">
                            <article className="btm-right-lft">
                                <h2>2E</h2>
                                <h1>285PTS</h1>
                            </article>
                            <article className="btm-right-rght">
                                <img className="flag" src="/images/flags/mexican.png"></img>
                            </article>
                        </article>
                    </article>
                </article>
                <article className="drivers-first">
                <article className="top">
                        <img className="first" src="/images/max_verstappen.png" ></img>
                    </article>
                    <article className="btm">
                        <article className="btm-left">
                            <article className="btm-left-lft">
                                <h1>1</h1>
                            </article>
                            <article className="btm-left-rght">
                                <h2>MAX</h2>
                                <h1>VERSTAPPEN</h1>
                            </article>
                        </article>
                        <article className="btm-right">
                            <article className="btm-right-lft">
                                <h2>1ER</h2>
                                <h1>500PTS</h1>
                            </article>
                            <article className="btm-right-rght">
                                <img className="flag" src="/images/flags/dutch.png"></img>
                            </article>
                        </article>
                    </article>
                </article>

                <article className="drivers-second">
                    <article className="top">
                        <img className="lewis" src="/images/hamilton.png" ></img>
                    </article>
                    <article className="btm">
                        <article className="btm-left">
                            <article className="btm-left-lft">
                                <h1>44</h1>
                            </article>
                            <article className="btm-left-rght">
                                <h2>LEWIS</h2>
                                <h1>HAMILTON</h1>
                            </article>
                        </article>
                        <article className="btm-right">
                            <article className="btm-right-lft">
                                <h2>3E</h2>
                                <h1>234PTS</h1>
                            </article>
                            <article className="btm-right-rght">
                                <img className="flag" src="/images/flags/british.png"></img>
                            </article>
                        </article>
                    </article>
                </article>
            </section>
            <section className="champion">
              <article className="content">
                  <h1>2023 CHAMPION TEAM</h1>
                  <img src="/images/Red-Bull-logo.png"></img>
              </article>
            </section>
        </section>

      <section className="middle">

        <Link className="link-card" to="/Seasons">
          <section id="season" className="card">
            <article className="top">
              <h1>SEASON</h1>
              <img className="grid" src="/images/grid.png"></img>
            </article>
            <article className="btm">
              <p>Check every Grand Prix results</p>
            </article>
          </section>
        </Link>
        <Link className="link-card" to="/Drivers">
          <section id="drivers" className="card">
            <article className="top">
              <h1>DRIVERS</h1>
              <img className="driver" src="/images/driver.png"></img>
            </article>
            <article className="btm">
              <p>Check every drivers of the 2023 season</p>
            </article>
          </section>
        </Link>
        <Link className="link-card" to="Teams">
          <section id="teams" className="card">
            <article className="top">
              <h1>TEAMS</h1>
              <img className="team" src="/images/racing.png"></img>
            </article>
            <article className="btm">
              <p>Check every Formula 1 Teams</p>
            </article>
          </section>
        </Link>
        <Link className="link-card" to="/Historic">
          <section id="historic" className="card">
            <article className="top">
              <h1>HISTORIC</h1>
              <img className="formula" src="/images/formula.png"></img>
            </article>
            <article className="btm">
              <p>Check memories from the past </p>
            </article>
          </section>
        </Link>
      </section>

      <section className="bottom">
        <section className="left">
          <h1>FIA FORUMA 2 WORLD CHAMPION</h1>
          <h2>Théo Pourchaire</h2>
          <p>Watch the career highlights of newly-crowned F2 Champion, Theo Pourchaire, who secured the title on the final day of the season at Yas Marina</p>
          <a href="https://www.youtube.com/watch?v=-NSvlYUgPeI&pp=ygUSdGhlbyBwb3VyY2hhaXJlIGYx"><button>WATCH NOW</button></a>
        </section>
        <section className="right">
        </section>
      </section>
    </>
  )
}