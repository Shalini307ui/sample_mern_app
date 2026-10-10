import header_component from "./components/header_component";
import footer_component from "./components/footer_component";

import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import {routes,route} from 'react-router-dom'

function App(){
  return(
    <div>
       <header_component></header_component>
       <routes>
          <route path="/" element={<home/>}></route>
          <route path="/" element={<about/>}></route>
          <route path="/" element={<contact/>}></route>
       </routes>
       <footer_component></footer_component>
       </div>
  )
}
export default App