import styled from "styled-components";

export const CurrencyBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:nth-child(1)::before {
    content: "Отдаете";
    color: #1b1e37;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
  }
  &:nth-child(2)::before {
    content: "Получаете";
    color: #1b1e37;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
  }
  input {
    display: flex;
    width: 100%;
    height: 48px;
    background-image: linear-gradient(90deg, #f2f4f9 0%, #e9ebf0 100%);
    border: none;
    padding: 0 30px;
    color: #1b1e37;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    border-radius: 8px;
  }
  select {
    cursor: pointer;
    width: 100%;
    border: none;
    appearance: none;
    outline: none;
    background-color: #fff;
    border: 1px solid #7e9bbd;
    border-radius: 6px;
    padding: 10px 35px 10px 15px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    display: block;
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #7e9bbd transparent transparent transparent;
  }
`;
