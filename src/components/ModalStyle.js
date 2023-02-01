import styled from "styled-components";
export const Conteiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & time {
    font-size: 0.65rem;
    cursor: text;
  }
  & p {
    font-size: 1.25rem;
    cursor: text;
  }
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const UploadButton = styled.button`
  border: 0;
  background: transparent;
  color: var(--white);
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--white);

  & svg:hover {
    color: #a60000;
  }
`;
export const DeleteButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: transparent;
  border:none;
  color:var(--white);
  cursor: pointer;
  &:hover{
    filter: drop-shadow(2px 2px 4px #696969 );
  }
`;
export const DownloadButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: transparent;
  border:none;
  color:var(--white);
  cursor: pointer;
  &:hover{
    filter: drop-shadow(2px 2px 4px #696969 );
  }
`;