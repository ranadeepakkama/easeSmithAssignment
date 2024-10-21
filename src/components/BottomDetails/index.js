import { FaInstagram } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { FaFacebook } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


import './index.css';

const aboutUsList = ['Our Story','Blogs','Careers','Contact Us', 'Help & Support'];
const ourService = ['Book maali','Plant Day Care','Rent Plants','Plants & Pots','Gardening Tools']
const usefulLinks = ['My Account','orders & Returns','Track Order','Terms & Conditions','Privacy Policy','Privacy Policy','Return,Refund & Replacement Policy',];
const getInTouch = ['Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003', 'Call: +919958287272', 'Email: care@chaperoneplants.com',]


const BottomCard = ()=> (
    <div className="bottom-container p-4 pt-3">
        <div className="d-flex flex-row justify-content-between">
            <div className='card'>
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className='fs-2'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                <input id="input-email" className="email-search" type="search" placeholder="Enter Your Email Address"/>
                <div className='butn-container'>
                    <button className="butn" type="button">SUBSCRIBE</button>
                </div>
            </div>
            <div className='card'>
                <h1>ABOUT US</h1>
                <ul>
                {aboutUsList.map(eachItem => (
                    <li key={uuidv4()}>{eachItem}</li>
                ))}
                </ul>
            </div>
            <div className="cart-3 card">
                <h1>OUR SERVICES</h1>
                <ul>{ourService.map(item => (
                    <li key={uuidv4()}>{item}</li>
                ))}
                </ul>
            </div>
            <div className='cart-4 card'>
                <h1>USEFUL LINKS</h1>
                <ul>
                    {usefulLinks.map(item=> (
                        <li key={uuidv4()}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="cart-5 card">
                <h1>GET IN TOUCH</h1>
                <ul>
                    {getInTouch.map(item => (
                        <li key={uuidv4()}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
          <h1>CHAPERONE</h1>
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
        <div className='media-container'>
            <h1>Follow us on</h1>
            <div className='media d-flex flex-row justify-content-between align-items-center pr-5'>
                <FaInstagram/>
                <FaFacebook/>
                <BsFillThreadsFill/>
                <FaYoutube/>
                <FaLinkedin/>
            </div>

        </div>
        <hr/>
        <div>
            <p style={{color: '#0000004D'}}>© 2023, chaperone.com All rights reserved.</p>
        </div>
    </div>
    
)

export default BottomCard