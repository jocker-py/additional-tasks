import React from "react";
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
  data: Array<MoneyType>
  setFilterValue: (filter: BanknotsType) => void
}

export const Country = ({data, setFilterValue}: CountryPropsType) => {
  const setAll = () => setFilterValue("All");
  const setDollars = () => setFilterValue("Dollars");
  const setRUBLS = () => setFilterValue("RUBLS");

  return (
    <div>
      <button onClick={setAll}>All</button>
      <button onClick={setDollars}>Dollars</button>
      <button onClick={setRUBLS}>RUBLS</button>
      <City data={"передаем денюжки в город"}/>
    </div>
  );
};

