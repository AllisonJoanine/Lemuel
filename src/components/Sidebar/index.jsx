import React from 'react'//Nessa linha está sendo importada do pacote react o componente React
import { Container, Content } from './styles'//Nessa linha está sendo importado os componentes Container e content do diretório styles
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'//Nessa linha está sendo importado os icones da biblioteca de react-icons

import SidebarItem from '../SidebarItem'//Nessa linha esá sendo importado o componente SidebarItem do diretório Sidebaritem

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }//Nessas linhas de códigos estão sendo aplicada uma função de active com o valor false para ocultar a sidebar

  return (/*Nas linhas de códigos abaixo está sendo aplicada a função em que tudo dentro do container e que estão
   com os icones, irão sofrer as alterações do active, aplicada acima*/
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar