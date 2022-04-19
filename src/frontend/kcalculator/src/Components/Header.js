import image from '../Assets/kcalculator-logo.png'
import { Navbar } from 'react-bootstrap';

const Header = ({userId}) => (
    (
        <Navbar className="Header navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={image} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
            KcalCulator
          </a>
        </div>
        <p>Logged in user id: {userId}</p>
      </Navbar>
      )

)

export default Header;
