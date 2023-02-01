import uuid from "react-uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addIcon from "../assets/addIcon.svg";
import { Button, Container, Content, Input } from "./MainStyle.js";
import { useEffect, useRef, useState } from "react";
import { PostIt } from "./PostIt";
import { Wrapper } from "./PostItStyle.js";
import { Modal } from "./Modal.jsx";

export function Main() {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState([]);
  const [insights, setInsights] = useState([]);
  const notify = () =>
      toast.success("Sua ideia foi adicionada!!", {
        theme: "colored",
        data: { key: "uuid()" },
      });
      const notifyDeleted = () =>
      toast.success("Ideia deletada com sucesso")

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if(!data){
      localStorage.setItem('data', JSON.stringify(insights));
    }else{
      setInsights(data)
    }
  }, []);
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

    const aux = [
      ...insights,
      {
        id: uuid(),
        text: inputRef.current.value,
        date: setDate(),
        background: changeColors(),
      },
    ];

    setInsights(aux);
    localStorage.setItem("data", JSON.stringify(aux));
    notify();
    inputRef.current.value = ''

  }
 

  function DeleteButton() {
    let insightsWithoutOne = insights.filter(({ id }) => id !== props.id)
    localStorage.setItem("data",JSON.stringify(insightsWithoutOne))
    setInsights(insightsWithoutOne)
    notifyDeleted();
    setOpen(false)
  }
 


  return (
      <Container>
        <p>Descreva seu insight:</p>
        <Content onSubmit={addInsight}>
          <Input title="Descreva sua Ideia" ref={inputRef} />

          <Button onClick={addInsight}>
            <img src={addIcon} alt="Add Icon" title="Adicione sua ideia" />
          </Button>
        </Content>
        <p>Lista dos seus insights:</p>
        <Wrapper>
          {insights?.map(({ id, text, date, background }) => (
              <PostIt
                  key={id}
                  id={id}
                  text={text}
                  date={date}
                  background={background}
                  Onclick={() => {
                    setOpen(true);
                    setProps({
                      id: id,
                      text: text,
                      date: date,
                      background: background,
                    });
                  }}
              />
          ))}

          {open && (
              <Modal
                  setOpen={() => setOpen(false)}
                  text={props.text}
                  date={props.date}
                  color={props.background}
            deleteFunction={DeleteButton}
            
            
              />
          )}
        </Wrapper>
        <ToastContainer role="alert" autoClose={3000} />
      </Container>
  );
}
