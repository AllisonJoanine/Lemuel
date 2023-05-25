import React, { useState } from 'react'//Nessa linha está sendo importada o pacote react e a funcao useState
import { Container } from './styles'//Nessa linha está sendo importada um componente localizado no styles
import { FaBars } from 'react-icons/fa'//Nessa linha está sendo importada um pacote de icones
import Sidebar from '../Sidebar'//Nessa linha está sendo importada um componente localizado no diretorio Sidebar

const Header = () => {//Nessa códigoestá sendo aplicado uma função de true e false para ocultar e restaurar a sidebar
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header