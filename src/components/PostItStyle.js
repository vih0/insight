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
  cursor: pointer;
  & time {
    font-size: 0.65rem;
    cursor: text;
  }
  & p {
    font-size: 1.25rem;
    cursor: text;
  }
 &:hover{
  filter: drop-shadow(3px 3px 6px #575757 );

 }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2.25rem;
  margin: 0 auto;

 
`;
