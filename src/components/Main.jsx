import { Button, Container, Content, Input } from "./MainStyle.jsx";
import addIcon from "../assets/addIcon.svg";
import { useState } from "react";
import { PostIt } from "./PostIt";
import { Wrapper } from "./PostItStyle.jsx";
export function Main() {
  const [text, setText] = useState("");
  const setInsight = [
    { id: 1, text: "oi" },
    { id: 2, text: "oi2" },
  ];
  function insights() {
    let insight = localStorage.setItem("Insight", text);
  }
  const setDate = () => {
    let date = new Date(Date.now());
    let formatDate = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium",
    }).format(date);

    return formatDate;
  };
  return (
    <Container>
      <p>Descreva seu insight:</p>
      <Content>
        <Input
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></Input>

        <Button>
          <img src={addIcon} alt="Add Icon" onClick={insights()} />
        </Button>
      </Content>
      <p>Lista dos seus insights:</p>
      <Wrapper>
        {setInsight.map(({ id, text }) => (
          <PostIt key={id} id={id} text={text} date={setDate()} />
        ))}
      </Wrapper>
    </Container>
  );
}
