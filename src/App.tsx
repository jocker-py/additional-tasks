import React, {useState} from "react";
import "./App.css";
import {Country} from "./Country";

export type BanknotsType = "Dollars" | "RUBLS" | "All";
export type MoneyType = {
  banknotes: BanknotsType
  value: number
  number: string
}

let defaultMoney: Array<MoneyType> = [
  {banknotes: "Dollars", value: 100, number: " a1234567890"},
  {banknotes: "Dollars", value: 50, number: " z1234567890"},
  {banknotes: "RUBLS", value: 100, number: " w1234567890"},
  {banknotes: "Dollars", value: 100, number: " e1234567890"},
  {banknotes: "Dollars", value: 50, number: " c1234567890"},
  {banknotes: "RUBLS", value: 100, number: " r1234567890"},
  {banknotes: "Dollars", value: 50, number: " x1234567890"},
  {banknotes: "RUBLS", value: 50, number: " v1234567890"},
];

export const moneyFilter = (money: Array<MoneyType>, filter: BanknotsType): Array<MoneyType> => {
  return [...money].filter(item => filter === "All" ? true : filter === item.banknotes);
};

function App() {
  const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney);
  const [filterValue, setFilterValue] = useState<BanknotsType>("All");
  const filteredMoney = moneyFilter(money, filterValue);
  return (
    <div className="App">
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}
      />
    </div>
  );
}


export default App;
