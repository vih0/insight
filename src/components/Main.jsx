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
    { id: 3, text: "oi3" },
  ];

  function insights() {}
  const setDate = () => {
    let date = new Date(Date.now());
    let formatDate = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
    })
      .format(date)
      .split("de")
      .join("/");

    return formatDate;
  };
  return (
    <Container>
      <p>Descreva seu insight:</p>
      <Content>
        <Input
          title="Descreva sua Ideia"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></Input>

        <Button>
          <img
            src={addIcon}
            alt="Add Icon"
            onClick={insights()}
            title="Adicione sua ideia"
          />
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
