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

export function PostIt() {
  return (
    <Wrapper>
      <Post background={changeColors}>
        <p>oi eu falo</p>
        <time title="01/01/2023">01/01/2023</time>
      </Post>
    </Wrapper>
  );
}
