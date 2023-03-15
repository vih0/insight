import * as S from './MainStyle'
import addIcon from "../assets/addIcon.svg";

export function Form({onSubmit,Ref,onClick}) {
    return (
        <S.Form onSubmit={onSubmit}>
        <S.Input title="Descreva sua Ideia" ref={Ref} required/>

        <S.Button onClick={onClick} type="submit" > 
          <img src={addIcon} alt="Add Icon" title="Adicione sua ideia" />
        </S.Button>
      </S.Form>
    );
}