import image from '../Assets/kcalculator-logo.png'
import { Navbar } from 'react-bootstrap';

const Header = () => (
    (
        <Navbar className="Header navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={image} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
            KcalCulator
          </a>
        </div>
      </Navbar>
      )

)

export default Header;