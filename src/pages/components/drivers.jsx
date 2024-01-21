function CardDriver({ standing, points, driverSurname, driverName, flagPath, driverPath }) {
  return (
    <section className="card-driver">
      <article className="points">
        <h1>{standing}</h1>
        <p>{points}</p>
      </article>
      <article className="driver">
        <article className="left">
          <h2>{driverSurname}</h2>
          <h1>{driverName}</h1>
        </article>
        <article className="right">
          <img className="flag" src={flagPath} alt="Flag" />
        </article>
      </article>
      {driverPath && (
        <article className="driver-img">
          <img src={driverPath} alt="Driver" />
        </article>
      )}
    </section>
  );
}

export default CardDriver;