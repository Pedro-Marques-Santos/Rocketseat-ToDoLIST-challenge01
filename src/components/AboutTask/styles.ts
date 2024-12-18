import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;

  h1 {
    font-size: 14px;
    font-weight: 500;
  }

  display: flex;
  justify-content: space-between;

  .blue {
    color: var(--blue);
  }

  .purple {
    color: var(--purple);
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Count = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--white-200);
  background: var(--gray-400);
  min-width: 23px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-left: 6px;
  padding-right: 6px;
`;
