import closeIcon from "../assets/closeIcon.svg";
import { Conteiner, CloseButton } from "./ModalStyle";
export function Modal({setOpen,text,date,color}) {
  return (
    <Conteiner background={color}>
      <CloseButton onClick={setOpen}>
        <img src={closeIcon} />
      </CloseButton>
      <p>{text}</p>
        <time>{date}</time>
    </Conteiner>
  );
}
