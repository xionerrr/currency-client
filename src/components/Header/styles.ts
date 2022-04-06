import styled from "styled-components";

export const Header = styled.div`
  margin-top: 24px;
`;

export const CurrentValue = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  font-weight: 500;
`;

export const CurrentValueItems = styled.div`
  border: 1px solid transparent;
  padding: 12px 10px 12px 17px;
  border-radius: 10px;
  background: #0078ff0d;
  display: flex;
  gap: 50px;
  box-shadow: 0 18px 16px -12px rgb(0 0 0 / 16%);
  div {
    display: flex;
    gap: 30px;
    div:first-child {
      position: relative;
    }
    div:first-child::after {
      content: "|";
      position: absolute;
      right: -17.5px;
      color: gold;
    }
  }
`;
