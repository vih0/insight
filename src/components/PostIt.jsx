import { Post } from "./PostItStyle.jsx";

export function PostIt({ id, background, Onclick, text, date }) {
  return (
    <Post
      key={id}
      background={background}
      onClick={Onclick}
      title="clique para mais opções"
    >
      <p>{text}</p>

      <time title={date}>{date}</time>
    </Post>
  );
}
