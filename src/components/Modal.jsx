import { FileArrowDown, TrashSimple } from "phosphor-react";
import closeIcon from "../assets/closeIcon.svg";
import {
  Conteiner,
  CloseButton,
  DeleteButton,
  UploadButton,
} from "./ModalStyle";

export function Modal({
  setOpen,
  text,
  date,
  color,
  deletePost,
  savePastePDF,
}) {
  return (
    <Conteiner background={color}>
      <CloseButton onClick={setOpen}>
        <img src={closeIcon} />
      </CloseButton>
      <p>{text}</p>
      <time>{date}</time>
      <DeleteButton onClick={deletePost} title="Clique para deletar PostIt">
        <TrashSimple size={31} />
      </DeleteButton>
      <UploadButton
        onClick={savePastePDF}
        title="Clique para fazer Download PostIt"
      >
        <FileArrowDown size={31} />
      </UploadButton>
    </Conteiner>
  );
}
