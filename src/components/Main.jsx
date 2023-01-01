import {Button, Content, Input,Teste} from './MainStyle.jsx';
import addIcon from '../assets/addIcon.svg';
import {useState} from "react";
import {PostIt} from "./PostIt";
export function Main(){
    const [text, setText]=useState('')
        const insight = '';
        localStorage.setItem(insight,text);



    return(
        <Teste>
            <p>Descreva seu insight:</p>
            <Content>
            <Input value={text}
                   onChange={(event) => setText(event.target.value)
                   }></Input>

            <Button><img src={addIcon} alt="Add Icon"/></Button>
            </Content>
            <p>Lista dos seus insights:</p>
            <PostIt></PostIt>
            <PostIt></PostIt>
            <PostIt></PostIt>
            <PostIt></PostIt>

        </Teste>
    );
}