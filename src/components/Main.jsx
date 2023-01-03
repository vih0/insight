import { Button, Container, Content, Input } from "./MainStyle.jsx";
import addIcon from "../assets/addIcon.svg";
import { useState } from "react";
import { PostIt } from "./PostIt";
import { Wrapper } from "./PostItStyle.jsx";
export function Main() {
  const [text, setText] = useState("");
  const insight = [];
  insight.push(text);

  //   localStorage.setItem("insight", text);

  return (
    <Container>
      <p>Descreva seu insight:</p>
      <Content>
        <Input
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></Input>

        <Button>
          <img src={addIcon} alt="Add Icon" />
        </Button>
      </Content>
      <p>Lista dos seus insights:</p>
      <Wrapper>
        <PostIt></PostIt>
        <PostIt></PostIt>
        <PostIt></PostIt>
        <PostIt></PostIt>
      </Wrapper>
    </Container>
  );
}
