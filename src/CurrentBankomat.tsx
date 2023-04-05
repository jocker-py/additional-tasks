import React, {FC} from "react";
import {MoneyType} from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat: FC<CurrentBankomatPropsType> = ({money}) => {
    return (
        <div>
            {money.banknotes}
        </div>
    );
};
