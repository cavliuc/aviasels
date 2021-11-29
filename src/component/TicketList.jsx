import { useState, useEffect } from "react";

import TicketItem from "./TicketItem";

export default function TicketList({ data }) {
  const [price, setPrice] = useState([]);


  // useEffect(() => {
  //   let results = data.filter((dataItem) => dataItem.price < 20000);
  //   setPrice(results)

  // }, []);
  // console.log(price)

  return (
    <div>
      {data.length ? (
        data.map((dataItem, index) => 
        <li key={index + 1}>
          <TicketItem  {...dataItem} />
          </li>)
      ) : (
        <h5>Not Found</h5>
      )}
    </div>
  );
}
