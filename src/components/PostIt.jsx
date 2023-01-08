import { Post } from "./PostItStyle.jsx";


export function PostIt(props) {
  return (
    <Post background={props.background}>
      <p>{props.text}</p>
      <time title={props.date}>{props.date}</time>
    </Post>
  );
}
