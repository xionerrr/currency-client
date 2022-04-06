import CurrencyFormat from "react-currency-format";

import * as S from "./styles";

export interface CurrencySelectProps {
  currencyOptions?: string[];
  selectedCurrency?: string;
  amount: number;
  onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeTotal: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = (props) => {
  const {
    amount,
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeTotal,
  } = props;

  return (
    <S.CurrencyBlock>
      <CurrencyFormat
        onChange={onChangeTotal}
        value={amount}
        decimalScale={2}
      />
      <S.SelectWrapper>
        <select onChange={onChangeCurrency} value={selectedCurrency}>
          {currencyOptions!.map((currencyOption) => (
            <option value={currencyOption} key={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </S.SelectWrapper>
    </S.CurrencyBlock>
  );
};
