import { FileArrowDown, Trash } from "phosphor-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import closeIcon from "../assets/closeIcon.svg";
import { Conteiner, CloseButton,DeleteButton, DownloadButton } from "./ModalStyle";
export function Modal({ setOpen, text, date, color, deleteFunction }) {
  
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Conteiner background={color} ref={componentRef}>
      <CloseButton onClick={setOpen}>
        <img src={closeIcon} />
      </CloseButton>
      <p>{text}</p>
      <time>{date}</time>
      <DeleteButton title="Clique para excluir" onClick={deleteFunction}><Trash size={32}/></DeleteButton>
     <DownloadButton  title="Clique para fazer Download" onClick={handlePrint}><FileArrowDown size={32}/></DownloadButton>
    </Conteiner>
  );
}
