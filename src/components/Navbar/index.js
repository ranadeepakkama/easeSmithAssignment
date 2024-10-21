import { RxPerson } from "react-icons/rx";
import { v4 as uuidv4 } from 'uuid';
import { BsCart2 } from "react-icons/bs";
import './index.css'

const toolsDropdown = () => (
        <div className="dropdown ml-2">
            <button className="nav-option dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tools
            </button>
        </div>
)

const plantsPots = () => (
    <p className="plants-pots-option">Plants & Pots</p>
)

const ourServiceDropDown = () => (
    <div className="dropdown ml-2">
            <button className="nav-option dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Services
        </button>
    </div>
)

const options = ['Home',plantsPots(),toolsDropdown(),ourServiceDropDown(),'Blog', 'Our Story', 'FAQs'] 

const Navbar = () => (
    <div className="navbar-container d-flex flex-row justify-content-between align-items-center p-3">
        <div className='cmpny-icon d-flex flex-row justify-content-start align-items-center'>
            <img className='cmpy-icon' src="https://res.cloudinary.com/draisdub8/image/upload/v1729265048/Easesmith%20Assignment/image_55_ijmivu.png" alt="compy-icon"/>
            <h1 className='name'>Chaperone</h1>
        </div>
        <div className='options-container'>  
            <ul className='list-items'>
                {options.map(item => (
                    <li key={uuidv4()}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="icons">
                <RxPerson/> 
                <p>My Profile</p>
            </div>
            <div className="icons">
                <BsCart2/> 
                <p>Cart</p>
            </div>
        </div>
        
    </div>
)

export default Navbar;