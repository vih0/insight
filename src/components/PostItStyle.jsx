import styled from 'styled-components';
const colors = {
    red: '#D00000',
    yellow: '#FFBA08',
    blue: '#3F88C5',
    pink: '#FF499E',
    green: '#00C49A',
    purple: '#AFA2FF',
}
export const Post = styled.div`
  background: ${colors.red};
  height: 12.5rem;
  width: 12.5rem;
  padding: 1rem;
  text-align: left;
  
`;
export const Wrapper = styled.div`
  
 display: grid;
 grid-template-columns: 200px ;
  gap: 1rem 2rem;
  
  

`;