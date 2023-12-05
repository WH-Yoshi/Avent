
export default function Standings(props){

    return(
        <>
        <section class="main">
            <article class="title">
                <h1>DRIVER STANDINGS 2023</h1>
            </article>
            <section class="drivers">
                <article class="drivers-second">
                    <article class="top">
                        <img class="second" src="/images/perez.png" ></img>
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
                                <img class="flag" src="/images/mexico.png"></img>
                            </article>
                        </article>
                    </article>
                </article>

                <article class="drivers-first">
                        <img class="second" scr="/images/F1.png"></img>
                        
                </article>

                <article class="drivers-second">
                    <article class="top">
                        <img class="second" src="/images/lewis.png" ></img>
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
                                <img class="flag" src="/images/mexico.png"></img>
                            </article>
                        </article>
                    </article>
                </article>
            </section>
        </section>
        <img class="flag" src="/images/champion_bg.png"></img>
        
        </>
    );
}
