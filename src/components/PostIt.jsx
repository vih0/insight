import { Post } from "./PostItStyle.jsx";

export function PostIt({background,setOpen,text,date}) {
  return (
    <Post background={background} onClick={setOpen}>
      <p>{text}</p>
      <time title={date}>{date}</time>
    </Post>
  );
}
