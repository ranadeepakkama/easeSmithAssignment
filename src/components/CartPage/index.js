import { useNavigate } from 'react-router-dom';
import './index.css';

const Cart = () => {
    const navigate = useNavigate(); 
    const onClickHomePage = () => {
        navigate('/'); 
    };

    return (
        <div className="main-container">
            <div className='container-cart p-3'>
                <div style={{width: '100%', textAlign:'center'}}>
                    <p style={{color:'#0F4811', fontWeight:'bold'}}>Your Cart</p>
                    <hr/>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-center' style={{height:'60%'}}>
                    <h1 style={{textAlign:'center'}}>Congratulations <br/> Order Placed!</h1>
                    <img className="img-cart" src='https://res.cloudinary.com/draisdub8/image/upload/v1729255305/Easesmith%20Assignment/plant_1_ytsfdt.jpg' alt='cart-img' />
                    <p style={{textAlign:'center'}}>Thank you for choosing Chaperone services.
                    We will soon get in touch with you!</p>
                    <div>
                        <button className="cart-button" onClick={onClickHomePage} type="button">CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
