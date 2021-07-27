import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom"

export default function Planets() {
  useEffect(() => {
    fetchPlanets();
  }, []);

  const [planets, setPlanets] = useState([]);
  const fetchPlanets = async () => {
    const dataJson = await fetch("https://swapi.dev/api/planets");
    const data = await dataJson.json();
    console.log(data);
    setPlanets(data.results);
  };
  return (
    <div className="my-auto">
       {/* <div class="twinkling"></div> */}
       <div class="clouds"></div>
      <div className="container-sm my-auto bdr">
        <table className="table">
          <thead>
            <tr>
              <th >Name</th>
              <th scope="col">Diameter</th>
              <th scope="col">Climate</th>
              <th scope="col">Terrain</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr>
                <th>{planet.name}</th>
                <th>
                  {planet.diameter}
                  <span> Km</span>
                </th>
                <th>{planet.climate}</th>
                <th>{planet.terrain}</th>
                <th>{(+planet.population).toLocaleString("en-US")}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
