import styled from 'styled-components';//Nessa linha está sendo importada o pacote de estilização react

export const Container = styled.div` //Nessa linha está sendo personalizado o componente Container usando o styled-components
  height: 100px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;