import { useState, useEffect } from 'react';




const Home = () => {

  const [fishName, setFishName] = useState('');

  useEffect(() => {
    setFishName('Nemo');
  }, []);

  return (<div className="home">
    <form className="form-inline">
  <input className="my-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className="card" style={{ width: "18rem" }}>
  {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
  <div className="card-body">
    <h5 className="card-title">{fishName}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    
  </div>
</div>
    <p>Home Page</p>
  </div> );
}
 
export default Home;
