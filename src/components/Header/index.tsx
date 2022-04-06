import { useEffect, useState } from "react";

import { currenciesAPI } from "src/store/currencies";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [firstValue, setFirstValue] = useState<string>();
  const [secondValue, setSecondValue] = useState<string>();
  const { data, isSuccess } = currenciesAPI.useFetchAllCurrenciesQuery();

  useEffect(() => {
    if (isSuccess) {
      const toFirstValue: string =
        data.rates[Object.keys(data.rates)[147]].toFixed(2);
      setFirstValue(toFirstValue);
      const toSecondValueUAH: number = data.rates[Object.keys(data.rates)[147]];
      const toSecondValueUSD: number = data.rates[Object.keys(data.rates)[149]];
      const toSecondValue = (toSecondValueUAH / toSecondValueUSD).toFixed(2);
      setSecondValue(toSecondValue);
    }
  }, [isSuccess, data]);

  return (
    <S.Header>
      {isSuccess ? (
        <S.CurrentValue>
          <S.CurrentValueItems>
            <div>Курс обмена:</div>
            <div>
              <div>1 EUR = {firstValue} UAH</div>
              <div>1 USD = {secondValue} UAH</div>
            </div>
          </S.CurrentValueItems>
        </S.CurrentValue>
      ) : (
        <div>
          <h1>...</h1>
        </div>
      )}
    </S.Header>
  );
};
