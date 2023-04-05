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
  const [filterValue, setFilterValue] = useState<BanknotsType>("");

  // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
  // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
  const filteredMoney = moneyFilter(грошы, фильтръ);
  return (
    <div className="App">
      <Country
        data={filteredMoney}   //отрисовать будем деньги после фильтрации
        setFilterValue={setFilterValue}  //useState передаем? Так можно было?!

      />
    </div>
  );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
