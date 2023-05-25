import React from 'react'//Nessa linha está sendo importada do pacote react o componente React
import { Container } from './styles'//Nessa linha está sendo importada um componente localizado no styles

const SidebarItem = ({ Icon, Text }) => {//Nessa linha está sendo feita para renderizar o conteúdo do componente
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem//Nessa linha o componente está sendo exportado como um valor padrão