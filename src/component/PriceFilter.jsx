import React, { useState } from "react";

export default function PriceFilter({onSearchTick = Function.prototype}) {
  const [price, setPrice] = useState("");

 
  return (
    <div className="price-filter">
      <button onClick={() => onSearchTick("cheap")} className="filter-btn">
        Самый Дешевый
      </button>
      <button onClick={() => onSearchTick("fast")} className="filter-btn">
        Самый Быстрый
      </button>
      <button onClick={() => onSearchTick("optimal")} className="filter-btn">
        Оптимальный
      </button>
    </div>
  );
}
