
export default function Main(props) {
  return(
    <>
      <section class="main">
            <article class="title">
                <h1>DRIVER STANDINGS 2023</h1>
            </article>
            <section class="drivers">
                <article class="drivers-second">
                    <article class="top">
                        <img class="perez" src="/images/perez.png" ></img>
                    </article>
                    <article class="btm">
                        <article class="btm-left">
                            <article class="btm-left-lft">
                                <h1>11</h1>
                            </article>
                            <article class="btm-left-rght">
                                <h2>SERGIO</h2>
                                <h1>PEREZ</h1>
                            </article>
                        </article>
                        <article class="btm-right">
                            <article class="btm-right-lft">
                                <h2>2E</h2>
                                <h1>285PTS</h1>
                            </article>
                            <article class="btm-right-rght">
                                <img class="flag" src="/images/flags/mexican.png"></img>
                            </article>
                        </article>
                    </article>
                </article>
                <article class="drivers-first">
                <article class="top">
                        <img class="first" src="/images/max_verstappen.png" ></img>
                    </article>
                    <article class="btm">
                        <article class="btm-left">
                            <article class="btm-left-lft">
                                <h1>1</h1>
                            </article>
                            <article class="btm-left-rght">
                                <h2>MAX</h2>
                                <h1>VERSTAPPEN</h1>
                            </article>
                        </article>
                        <article class="btm-right">
                            <article class="btm-right-lft">
                                <h2>1ER</h2>
                                <h1>500PTS</h1>
                            </article>
                            <article class="btm-right-rght">
                                <img class="flag" src="/images/flags/dutch.png"></img>
                            </article>
                        </article>
                    </article>
                </article>

                <article class="drivers-second">
                    <article class="top">
                        <img class="lewis" src="/images/hamilton.png" ></img>
                    </article>
                    <article class="btm">
                        <article class="btm-left">
                            <article class="btm-left-lft">
                                <h1>44</h1>
                            </article>
                            <article class="btm-left-rght">
                                <h2>LEWIS</h2>
                                <h1>HAMILTON</h1>
                            </article>
                        </article>
                        <article class="btm-right">
                            <article class="btm-right-lft">
                                <h2>3E</h2>
                                <h1>234PTS</h1>
                            </article>
                            <article class="btm-right-rght">
                                <img class="flag" src="/images/flags/british.png"></img>
                            </article>
                        </article>
                    </article>
                </article>
            </section>
            <section class="champion">
              <article class="content">
                  <h1>2023 CHAMPION TEAM</h1>
                  <img src="/images/Red-Bull-logo.png"></img>
              </article>
            </section>
        </section>

      <section class="middle">

        <a class="link-card" href="">
          <section id="season" class="card">
            <article class="top">
              <h1>SEASON</h1>
              <img class="grid" src="/images/grid.png"></img>
            </article>
            <article class="btm">
              <p>Check every Grand Prix results</p>
            </article>
          </section>
        </a>

      <a class="link-card" href="">
        <section id="drivers" class="card">
          <article class="top">
            <h1>DRIVERS</h1>
            <img class="driver" src="/images/driver.png"></img>
          </article>
          <article class="btm">
            <p>Check every drivers of the 2023 season</p>
          </article>
        </section>
      </a>
      <a class="link-card" href="">
        <section id="teams" class="card">
          <article class="top">
            <h1>TEAMS</h1>
            <img class="team" src="/images/racing.png"></img>
          </article>
          <article class="btm">
            <p>Check every Formula 1 Teams</p>
          </article>
        </section>
        </a>
        
        <a class="link-card" href="">
        <section id="historic" class="card">
          <article class="top">
            <h1>HISTORIC</h1>
            <img class="formula" src="/images/formula.png"></img>
          </article>
          <article class="btm">
            <p>Check memories from the past </p>
          </article>
        </section></a>
      </section>

      <section class="bottom">
        <section class="left">
          <h1>FIA FORUMA 2 WORLD CHAMPION</h1>
          <h2>Théo Pourchaire</h2>
          <p>Watch the career highlights of newly-crowned F2 Champion, Theo Pourchaire, who secured the title on the final day of the season at Yas Marina</p>
          <button href="">WATCH NOW</button>
        </section>
        <section class="right">
        </section>
      </section>
    </>
  )
}