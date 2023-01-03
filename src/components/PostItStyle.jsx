import styled from "styled-components";

const handleColors = () => {
  let cor = Math.floor(Math.random() * 55555).toString(16);
  return `#${cor}`;
};
export const Post = styled.div`
  background: ${(props) => props.background};
  height: 12.5rem;
  width: 12.5rem;
  padding: 1rem;
  text-align: left;
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
