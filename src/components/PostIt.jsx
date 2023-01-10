import { Post } from "./PostItStyle.jsx";

export function PostIt({background,Onclick,text,date}) {
  return (
    <Post background={background} onClick={Onclick}>
      <p>{text}</p>
      <time title={date}>{date}</time>
    </Post>
  );
}
