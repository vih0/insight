import uuid from "react-uuid";

import {Button, Container, Content, Input} from "./MainStyle.jsx";
import addIcon from "../assets/addIcon.svg";
import {useRef, useState} from "react";
import {PostIt} from "./PostIt";
import {Wrapper} from "./PostItStyle.jsx";

export function Main() {
  const inputRef = useRef();

  const [insights, setInsights] = useState([{
    id:uuid(),
    text:"Primeira Ideia",
    date:"03/jan/2023",
    background:'#D00000',
  }]);

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
  function addInsight(event) {
    event.preventDefault();
    addToMemory();
    setInsights([
      ...insights,
      { id: uuid(), text: inputRef.current.value, date: setDate(),background: changeColors() },
    ]);
  }

  let data = JSON.stringify(insights);

  function addToMemory() {
    if(data !== '') {
      localStorage.setItem("data", data)
    }
    let convert = JSON.parse(localStorage.getItem("data"));
    convertInsights.push(convert)
    return console.log(convertInsights)
  }

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
        {insights.map(({ id, text, date,background }) => (
          <PostIt key={id} id={id} text={text} date={date} background={background} />
        ))}
      </Wrapper>
    </Container>
  );
}
