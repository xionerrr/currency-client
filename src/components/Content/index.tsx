import { useEffect, useState } from "react";

import * as S from "./styles";
import { CurrencySelect } from "src/components/Content/components/CurrencySelect";
import { currenciesAPI } from "src/store/currencies";

export const Content: React.FC = () => {
  const [currency, setCurrency] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>();
  const [toCurrency, setToCurrency] = useState<string>();
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);
  const [exchangeRate, setExchangeRate] = useState<number>();
  const [date, setDate] = useState<string>();

  const { data: allCurrencyData, isSuccess: allCurrencyDataSuccess } =
    currenciesAPI.useFetchAllCurrenciesQuery();
  const [fetchCorrectCurrency, { isSuccess, data }] =
    currenciesAPI.useFetchCorrectCurrencyMutation();

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate!;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate!;
  }

  useEffect(() => {
    if (allCurrencyDataSuccess) {
      const baseCurrency: string = allCurrencyData.base;
      const rateCurrencies: string[] = Object.keys(
        allCurrencyData.rates
      ).filter((item) => item !== baseCurrency);
      const firstRateCurrency: string = Object.keys(allCurrencyData.rates)[0];
      const firstObject: number = allCurrencyData.rates[firstRateCurrency];
      const date = allCurrencyData.date;
      setCurrency([baseCurrency, ...rateCurrencies]);
      setFromCurrency(baseCurrency);
      setToCurrency(firstRateCurrency);
      setExchangeRate(firstObject);
      setDate(date);
      fetchCorrectCurrency({
        fromCurrency: baseCurrency,
        toCurrency: firstRateCurrency,
      });
    }
  }, [allCurrencyDataSuccess, allCurrencyData, fetchCorrectCurrency]);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null && isSuccess) {
      setExchangeRate(data?.rates[toCurrency]);
    }
  }, [fromCurrency, toCurrency, isSuccess, data]);

  const handleFromTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInFromCurrency(true);
  };

  const handleToTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInFromCurrency(false);
  };

  return (
    <S.Content>
      <S.Items>
        <CurrencySelect
          currencyOptions={currency}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => {
            setFromCurrency(e.target.value);
            fetchCorrectCurrency({
              fromCurrency: e.target.value,
              toCurrency,
            });
          }}
          onChangeTotal={handleFromTotalChange}
          amount={fromAmount}
        />
        <CurrencySelect
          currencyOptions={currency}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => {
            setToCurrency(e.target.value);
            fetchCorrectCurrency({
              fromCurrency,
              toCurrency: e.target.value,
            });
          }}
          onChangeTotal={handleToTotalChange}
          amount={toAmount}
        />
      </S.Items>
      {date ? (
        <S.DateItem>
          <h1>Последнее обновление {date}</h1>
        </S.DateItem>
      ) : (
        <div>
          <h1>...</h1>
        </div>
      )}
    </S.Content>
  );
};
