import { TrashSimple } from "phosphor-react";
import closeIcon from "../assets/closeIcon.svg";
import { Conteiner, CloseButton, DeleteButton } from "./ModalStyle";

export function Modal({ setOpen, text, date, color, deletePost }) {
  return (
    <Conteiner background={color}>
      <CloseButton onClick={setOpen}>
        <img src={closeIcon} />
      </CloseButton>
      <p>{text}</p>
      <time>{date}</time>
      <DeleteButton onClick={deletePost}>
        <TrashSimple size={31} />
      </DeleteButton>
    </Conteiner>
  );
}
