import styled from "styled-components";
export const Conteiner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.background};
`;
export const closeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
