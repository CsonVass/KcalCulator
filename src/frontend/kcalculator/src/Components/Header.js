import image from '../Assets/kcalculator-logo.png'
import { Navbar } from 'react-bootstrap';
import { useKeycloak } from "@react-keycloak/web";

const Header = () => {
  const { keycloak, initialized } = useKeycloak();
    return(
        <Navbar className="Header navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={image} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
            KcalCulator
          </a>
        </div>
        <div className="hidden xl:flex items-center space-x-5">
               <div className="hover:text-gray-200">
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}

                 {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="btn text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                 )}
               </div>
             </div>
      </Navbar>
      )

                 }

export default Header;
