import React, {FC} from "react";
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";

type CityPropsType = {
  data: Array<MoneyType>
}

export const City: FC<CityPropsType> = ({data}) => {
  const mappedMoney = data.map((el: MoneyType, index) => (
    <CurrentBankomat key={index} money={el}/>
  ));

  return (
    <div>
      <div>{mappedMoney}</div>
    </div>
  );
};

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке