import { useState, useEffect } from "react";

export default function FilterTransfer({ transitFilter, setState }) {
  const [checkbox, setCheckbox] = useState({
    all: true,
    none: false,
    one: false,
    two: false,
    three: false,
  });
  const [trueCheck, setTrue] = useState([])

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "radio" ? target.checked : target.value;
    const name = target.value;

    setCheckbox({
      [name]: value,
    });
  };


useEffect(() => {
  for(let key in checkbox){
     if(checkbox[key] === true){
      setState(key)
      //setState(prevState => [...prevState, key])
     }
    
}
}, [checkbox])

 
  return (
    <div className="transfer-filter">
      <div className="transfer-filter-width">
        <h4 className="transfer-name">Количество пересадок</h4>

        <div className="checkbox">
          <div><label>
            <input
              type="radio"
              value="all"
              name='radio'
              checked={checkbox.name }
              defaultChecked 
              className="transfer-bottom"
              onChange={handleInputChange}
            />
          Все 
          </label>
          </div>
          <div><label>
            <input
              type="radio"
              value="none"
              name='radio'
              checked={checkbox.name}
              className="transfer-bottom"
              onChange={handleInputChange}
            />
          Без пересадок
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              value="one"
              name='radio'
              checked={checkbox.name}
              onChange={handleInputChange}
              className="transfer-bottom"
            />
            1 пересадка
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              value="two"
              name='radio'
              checked={checkbox.name}
              onChange={handleInputChange}
              className="transfer-bottom"
            />
             2 пересадки
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              value="three"
              name='radio'
              checked={checkbox.name }
              onChange={handleInputChange}
              className="transfer-bottom"
            />
            3 пересадки
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}
