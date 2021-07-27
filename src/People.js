import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom"

export default function People() {
  useEffect(() => {
    fetchPeople();
  }, []);

  const [people, setPeople] = useState([]);
  const fetchPeople = async () => {
    const dataJson = await fetch("https://swapi.dev/api/people");
    const data = await dataJson.json();
    console.log(data);
    setPeople(data.results);
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
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Birth</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr>
                <th>{person.name}</th>
                <th>
                  {person.height}
                  <span> cm</span>
                </th>
                <th>
                  {person.mass}
                  <span> Kg</span>
                </th>
                <th>{person.birth_year}</th>
                <th>{person.gender}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
