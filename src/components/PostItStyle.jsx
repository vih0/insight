import styled from "styled-components";

export const Post = styled.div`
  background: ${(props) => props.background};
  height: 12.5rem;
  width: 12.5rem;
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & time {
    font-size: 0.65rem;
  }
  & p{
    font-size: 1.25rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  gap: 2.25rem;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
