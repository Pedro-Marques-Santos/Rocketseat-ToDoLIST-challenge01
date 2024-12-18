import styled from "styled-components";

interface IContainer {
  $status: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: space-between;
  border: ${({ $status }) =>
    $status ? "1px solid var(--gray-500)" : "1px solid var(--gray-400)"};

  background-color: var(--gray-500);
  padding: 23px 15px;
  border-radius: 8px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Status = styled.div`
  width: 19px;
  height: 19px;
  border: 2px solid var(--blue);
  border-radius: 50%;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CompletedStatus = styled.div`
  width: 19px;
  height: 19px;
  background-color: var(--purple-dark);
  border-radius: 50%;
  cursor: pointer;
  transition: filter 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }

  img {
    padding-right: 1px;
    width: 100%;
    max-width: 11px;
  }
`;

interface IAbout {
  $status: boolean;
}

export const About = styled.div<IAbout>`
  font-size: 14px;
  font-weight: 300;
  color: ${({ $status }) => ($status ? "var(--gray-300)" : "var(--gray-100)")};
  max-width: 600px;
  word-wrap: break-word;
  text-decoration: ${({ $status }) => ($status ? "line-through" : "none")};
`;

export const TrashIcon = styled.img`
  width: 12px;
  height: 14px;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
