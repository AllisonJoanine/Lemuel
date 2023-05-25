import styled from 'styled-components';//Nessa linha está sendo importada o pacote de estilização react

export const Container = styled.div`//Nessa linha está sendo personalizado o componente Container usando o styled-components
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;