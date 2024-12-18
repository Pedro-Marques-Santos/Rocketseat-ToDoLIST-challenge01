import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #333333;
  border-bottom: none;
  border-left: transparent;
  border-right: transparent;
  border-radius: 10px;
  padding-top: 60px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 56px;
    height: 56px;
  }

  h1 {
    margin-top: 12px;
    color: var(--gray-300);
    font-size: 16px;
    font-weight: bold;
  }

  h2 {
    color: var(--gray-300);
    font-size: 16px;
    font-weight: 400;
  }
`;
