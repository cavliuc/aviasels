

export default function TicketItem({ key, price, carrier, segments }) {


    
  return (
    
    <div id={key} className="main" >
      <div className="price-name">
        <h1 className='price'>{price } Руб / {(price /72).toFixed()} USD</h1>
        <h1>{carrier}</h1>
      </div>
      <div className="main-date">
        <div className="date-time">
          <div className="there">
            <p className='span'>{segments[0].origin} - {segments[0].destination} </p>
            <div>{segments[0].date}
            </div>
          </div>
          <div className="back">
            <div className='span'>{segments[1].origin} - {segments[1].destination}
            </div>
            <div>              
              {segments[1].date}
            </div>
          </div>
        </div>

        <div className="date-time">
          <div className="there">
            <p className='span'>
              в пути 
              </p>
              <div> 
              {(segments[0].duration /60).toFixed(1) } часа
            </div>
          </div>
          <div className="back">
            <p className='span'>
              в пути 
              </p>
              <div>
              {(segments[1].duration / 60).toFixed(1)} часа
            </div>
          </div>
        </div>

        <div className="date-time">
          <div className="there">
            <div className='span'>
              {(segments[0].stops.length)? (`${segments[0].stops.length} пересадка(и)`) : (<p>Без пересадок</p>)}
              </div>
              <div>
              {(segments[0].stops.length)?(segments[0].stops).join(' ') : (<p> </p>)}
              {/* {(segments[0].stops).join() } */}
            </div>
          </div>
          <div className="back">
            <div className='span'>
            {(segments[1].stops.length)? (`${segments[1].stops.length} пересадка(и)`) : (<p>Без пересадок</p>)}
              </div>
              <div>
              {(segments[1].stops.length)?(segments[1].stops).join(' ') : (<p> </p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
