import { useParams } from 'react-router-dom';
import './index.css'

const ThankYouPage = props => {
    const {name} = useParams()
    return(
        <div  className="m-container">
           <h1 className='wishing-header'>Thank you for your interest in <span style={{color:'#165315'}}>{name}</span>!</h1>
        </div>
    ) 
} 

export default ThankYouPage

