import closeIcon from "../assets/closeIcon.svg";
import { Conteiner, closeButton } from "./ModalStyle";
export function Modal(props) {
  return (
    <Conteiner background="#FFFF">
      <closeButton onClick={props.setOpen}>
        <img src={closeIcon} />
      </closeButton>
      <p>{props.text}</p>
    </Conteiner>
  );
}
