import uuid from "react-uuid";

import { Button, Container, Content, Input } from "./MainStyle.jsx";
import addIcon from "../assets/addIcon.svg";
import { useRef, useState } from "react";
import { PostIt } from "./PostIt";
import { Wrapper } from "./PostItStyle.jsx";
import { Modal } from "./Modal.jsx";
export function Main() {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [insights, setInsights] = useState([
    {
      id: uuid(),
      text: "Pirmeira ideia",
      date: "04/jan/2023",
      background: "#D00000",
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
  const changeColors = () => {
    const colors = [
      "#D00000",
      "#FFBA08",
      "#3F88C5",
      "#FF499E",
      "#00C49A",
      "#AFA2FF",
    ];
    let randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  };
  function addInsight(event) {
    event.preventDefault();

    setInsights([
      ...insights,
      {
        id: uuid(),
        text: inputRef.current.value,
        date: setDate(),
        background: changeColors(),
      },
    ]);
  }
  function addToMemory() {
    let teste = insights;
    if (localStorage.hasOwnProperty(data)) {
      teste = JSON.parse(localStorage.getItem("data"));
    } else {
      console.log("tem algo armazenado");
    }
    return teste;
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
        {insights.map(({ id, text, date, background }) => (
          <PostIt
            key={id}
            id={id}
            text={text}
            date={date}
            background={background}
            setOpen={() => setOpen(true)}
          />
        ))}
        {open && <Modal setOpen={() => setOpen(false)} text="bla bla bla" />}
      </Wrapper>
    </Container>
  );
}
