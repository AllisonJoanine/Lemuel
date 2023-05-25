import React from 'react';//Nessa linha está sendo importada do pacote react o componente React
import ReactDOM from 'react-dom';//Nessa linha está sendo importada do pacote react-dom o componente React-DOM
//O ReactDOM é uma parte essencial para renderizar a aplicação React na tela e interagir com os elementos da DOM.
import App from './App';//Nessa linha está sendo importada do do diretório App o componente App
import reportWebVitals from './reportWebVitals';//Nessa linha está sendo importada do do diretório reportWebVitals o componente reportWebVitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);//Nessa linha de código renderiza o componente App na DOM, tornando-o visível

reportWebVitals();
