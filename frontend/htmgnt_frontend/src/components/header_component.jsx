import './header_com.css'
import {link} from 'react-router-dom'

function header_component(){
  return(
    <div>
      <div class="header">
        <link to="/">home</link>
        <link to="/about">about us</link>
        <link to="/contact">contact us</link>
    </div>
  </div>
  )
}
export default header_component