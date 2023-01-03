import { Post, Wrapper } from "./PostItStyle.jsx";
const colors = [
  "#D00000",
  "#FFBA08",
  "#3F88C5",
  "#FF499E",
  "#00C49A",
  "#AFA2FF",
];
const changeColors = () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};

export function PostIt(props) {
  return (
    <Wrapper>
      <Post background={changeColors}>
        <p>{props.text}</p>
        <time title={props.date}>{props.date}</time>
      </Post>
    </Wrapper>
  );
}
