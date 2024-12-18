import styled from "styled-components";

export const Container = styled.div`
  margin-top: -27px;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    max-width: 638px;
    height: 54px;
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 8px;

    color: var(--gray-300);
    font-size: 16px;
    padding-left: 10px;
  }

  button {
    width: 100%;
    max-width: 90px;
    height: 54px;
    border-radius: 8px;
    background: var(--blue-dark);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    h5 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: var(--gray-100);
    }

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
