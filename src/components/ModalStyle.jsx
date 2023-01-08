import styled from "styled-components";
export const Conteiner = styled.div`
 position:fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction: column;
  & time{
    font-size: 0.65rem;
    cursor: text;
  }
  & p{
    font-size: 1.25rem;
    cursor: text;
  }
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position:absolute;
  top:1rem;
  right:1rem;
  
  
`;
