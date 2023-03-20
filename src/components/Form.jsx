import * as S from './MainStyle'
import addIcon from "../assets/addIcon.svg";

export function Form({onSubmit,Ref,onClick, altText}) {
    return (
        <S.Form onSubmit={onSubmit}>
        <S.Input data-testid="form-field" title="Descreva sua Ideia" ref={Ref} required placeholder={altText}/>

        <S.Button data-testid="form-btn" onClick={onClick} type="submit" title="Adicione sua ideia" > 
          <img src={addIcon} alt="Add Icon"  />
        </S.Button>
      </S.Form>
    );
}