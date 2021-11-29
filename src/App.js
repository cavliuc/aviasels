import React, { useState, useEffect} from "react";
import TicketList from "./component/TicketList";
import PriceFilter from "./component/PriceFilter";
import FilterTransfer from "./component/FilterTransfer";

let id = 'pt1o';


export default function App () {
  const[tickets, setTickets] = useState([])
  const[filterTickets, setFilterTickets] = useState([])
  const [state, setState] = useState(['all'])


  const transitFilter =(str)=>{
    setState(str) 

   
     
  }
  

  const onSearchTick = (str) =>{
    if (str === "cheap") {
      let cheap = tickets.sort((a, b) => (a.price - b.price))
      setFilterTickets(cheap.slice(0,[10]))
     
    }
    if (str === "fast") {
      let ticket = tickets.filter(d => d.segments[0].duration <= 900 & d.segments[1].duration <= 900);
      setFilterTickets(ticket.slice(0,[10]))
    }
    if (str === "optimal") {
      let ticket = tickets.filter(d => Number(d.price) <= 30000 & d.segments[0].duration <= 1000 & d.segments[1].duration <= 1000);
      setFilterTickets(ticket.slice(0,[10]))
    }
    }
    

  useEffect(() =>{
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}&s=all`)
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets)
        setFilterTickets(data.tickets.slice(0,[10]))
      });
  }, []
  )

  useEffect(() => {
      
    if(state === 'all'){
      return setFilterTickets(tickets)
    }else 
    if(state === 'none'){
      const ticket = tickets.filter(ticket => ticket.segments[0].stops.length   === 0 && ticket.segments[1].stops.length === 0);
      
      return setFilterTickets(ticket)
    }else 
    if(state === 'one'){
      const ticket = tickets.filter(ticket => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1);
      
      setFilterTickets(ticket)
    }
    else
    if(state === 'two'){
      const ticket = tickets.filter(ticket => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2);
      
      setFilterTickets(ticket)
    }else
    if(state === 'three'){
      const ticket = tickets.filter(ticket => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3);
      
      return setFilterTickets(ticket)
    }
  }, [state])

    return (
      <div className="App">
        <div className="main-page">
          <FilterTransfer transitFilter={transitFilter} setState={setState} />
          <div className="ticket">
            <PriceFilter onSearchTick={onSearchTick} />
            <TicketList data={filterTickets} />
          </div>
        </div>
      </div>
    );
}

