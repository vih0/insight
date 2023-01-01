import {Content, Title} from './HeaderStyle.jsx';
import logo from '../assets/Logo.svg';
export function Header(){
    return(
        <Content>
            <img src={logo} alt="Logo Insights"/>
            <Title>Insights</Title>
        </Content>
    );
}