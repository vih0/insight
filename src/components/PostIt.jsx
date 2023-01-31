import { Post } from "./PostItStyle.jsx";

export function PostIt({ id, background, Onclick, text, date }) {
  return (
    <Post key={id} background={background} onClick={Onclick}>
      <p>{text}</p>

      <time title={date}>{date}</time>
    </Post>
  );
}
