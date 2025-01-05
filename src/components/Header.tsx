import logo from '../assets/logo.svg'
import './Header.css'
import NavBar from './Navbar'
// import { Persona } from "@fluentui/react-components";
// import type { PersonaProps } from "@fluentui/react-components";
const Header = () => {
  return (
    <div className='main'>
        <div>
            <a href="/" target="_blank">
            <img src={logo} className="logo" alt="Ai Demo" />
            </a>
    
        </div>

        <div>
            <NavBar />
        </div>

        <div className='user'>

        <a href="/" target="_blank">
            <img src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png"
             className="" alt="user" />
            </a>

            <p> Samuel John </p>

            </div>

        {/* <Persona
            name="Kevin Sturgis"
            secondaryText="Available"
            presence={{ status: "available" }}
            avatar={{
                image: {
                src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
                },
            }}
            // {...props}
        /> */}
    </div>
  )
}

export default Header