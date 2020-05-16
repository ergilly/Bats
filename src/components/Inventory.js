import React from "react";
import './Inventory.css'
const Inventory = props => {
    let array = props.items.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      let aYear;
      a.year === undefined ? aYear = -10000 : aYear = a.year
      let bYear;
      b.year === undefined ? bYear = -10000 : bYear = b.year

      let aMonth;
      a.month === undefined ? aMonth = 1 : aMonth = a.month
      let bMonth;
      b.month === undefined ? bMonth = 1 : bMonth = b.month

      let aDate = new Date(aYear, aMonth, 1)
      let bDate = new Date(bYear, bMonth, 1)
      return aDate - bDate;
    });
  const items = () => {
    return array.map((element, index) => {
      return <li key={index}>
        <tr>
          <td>{element.month}/{element.year}</td>
          <td>{element.stateProvince}</td>
          <td>{element.decimalLatitude}</td>
          <td>{element.decimalLongitude}</td>
        </tr>
      </li>;
    });
  }


  return <div>
    <tr>
      <th>Date</th>
      <th>State</th>
      <th>Lat</th>
      <th>Lon</th>
    </tr>
    <ol>{items()}</ol>
  </div>
};

export default Inventory;
