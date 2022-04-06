import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CURRENCY } from "src/api/currency";

interface IRate {
  [k: string]: number;
}

interface IMotd {
  msg: string;
  url: string;
}

interface ICurrency {
  base: string;
  date: string;
  motd: IMotd;
  rates: IRate;
  success: boolean;
}

interface ICorrectCurrency {
  fromCurrency: string | undefined;
  toCurrency: string | undefined;
}

export const currenciesAPI = createApi({
  reducerPath: "currenciesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_CURRENCY}` }),
  endpoints: (build) => ({
    fetchAllCurrencies: build.query<ICurrency, void>({
      query: () => ({
        url: `/latest`,
      }),
    }),
    fetchCorrectCurrency: build.mutation<ICurrency, ICorrectCurrency>({
      query: ({ fromCurrency, toCurrency }) => ({
        url: `/latest?base=${fromCurrency}&symbols=${toCurrency}`,
        method: "GET",
      }),
    }),
  }),
});
