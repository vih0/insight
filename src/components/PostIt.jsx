import { Post } from "./PostItStyle.js";

export function PostIt({ id, background, Onclick, text, date }) {
  return (
    <Post key={id} background={background} onClick={Onclick} title="Clique para mais funções">
      <p>{text}</p>

      <time title={date}>{date}</time>
    </Post>
  );
}
