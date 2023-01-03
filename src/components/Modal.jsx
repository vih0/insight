import closeIcon from "../assets/closeIcon.svg";
export function Modal(props) {
  <div>
    <button>
      <img src={closeIcon} />
      onClick={props.setOpen}
    </button>
    <h2>{props.title}</h2>
  </div>;
}
