import uuid from "react-uuid";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button, Container, Content, Input } from "./MainStyle.jsx";
import addIcon from "../assets/addIcon.svg";
import { useRef, useState } from "react";
import { PostIt } from "./PostIt";
import { Wrapper } from "./PostItStyle.jsx";
export function Main() {
  const inputRef = useRef();

  const [insights, setInsights] = useState([
    {
      id: uuid(),
      text: "Um app de lista de insights",
      date: "04 /jan /2023",
    },
  ]);

  const setDate = () => {
    let date = new Date(Date.now());
    let formatDate = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .format(date)
      .split("de")
      .join("/");
    return formatDate;
  };

  function addInsight(event) {
    event.preventDefault();

    setInsights([
      ...insights,
      { id: uuid(), text: inputRef.current.value, date: setDate() },
    ]);
  }
  function addToMemory() {
    let data = JSON.stringify(insights);
    return localStorage.setItem("data", data);
  }
  addToMemory();
  return (
    <Container>
      <p>Descreva seu insight:</p>
      <Content onSubmit={addInsight}>
        <Input title="Descreva sua Ideia" ref={inputRef} />

        <Button>
          <img
            src={addIcon}
            alt="Add Icon"
            onClick={addInsight}
            title="Adicione sua ideia"
          />
        </Button>
      </Content>
      <p>Lista dos seus insights:</p>
      <Wrapper>
        {insights.map(({ id, text, date }) => (
          <PostIt key={id} id={id} text={text} date={date} />
        ))}
      </Wrapper>
    </Container>
  );
}
