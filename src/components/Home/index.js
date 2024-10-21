import Navbar  from "../Navbar";
import FilterProducts from "../FiltersAndProductsCart";
import BottomCard from "../BottomDetails";
import { CiSearch } from "react-icons/ci";
import './index.css'

const plants_list = [{id:1,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268078/Easesmith%20Assignment/Ellipse_68_cfqlst.png', details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:2,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268686/Easesmith%20Assignment/Ellipse_69_eyqeee.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:3,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268752/Easesmith%20Assignment/Ellipse_70_a1bmtz.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:4,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268762/Easesmith%20Assignment/Ellipse_71_pucvuz.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:5,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268881/Easesmith%20Assignment/Ellipse_62_obivov.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:6,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268752/Easesmith%20Assignment/Ellipse_70_a1bmtz.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
    {id:7,img:'https://res.cloudinary.com/draisdub8/image/upload/v1729268686/Easesmith%20Assignment/Ellipse_69_eyqeee.png',details:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'},
]

const Home = () =>(
    <div className="home-container">
        <div className='header d-flex'>
            <div className='container ml-5 w-5 d-flex justify-content-end align-items-center'> 
                <p className='m-1'>Free Shipping on orders above 99</p>
            </div>
            <div className='container d-flex justify-content-end align-items-center'>
                <p className='m-1'>Call us on: +91 9876805120</p>
            </div> 
        </div>
        <Navbar/>
        <div className="text-align-center d-flex flex-row justify-content-center mt-2">
            <div className="search-conatiner d-flex flex-row justify-content-between align-items-center">
                <CiSearch/><input type="search" id='input-serach' className="search"/><img className="search-img" src='https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__' alt='search-img'/>
            </div>
        </div>
        <div className="pl-3">
            <div className="d-flex flex-row justify-content-start">
                <h1 className="option mr-2 pl-2 pr-2" style={{ backgroundColor: '#165315', color: '#fff'}}>Plants</h1>
                <h1 className="option pl-2 pr-2" style={{border:'solid #165315 1px', color:'#165315'}}>Pots</h1>
            </div>
            <p className="text-start p-3">
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. 
                Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et 
                architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
            <div className="nursery-container">
                <h1>Nursery</h1>
                <div className="list-container d-flex flex-row justify-content-between align-items-center">
                    {plants_list.map(item => (
                        <div key={item.id} className="item d-flex flex-column justify-content-between align-items-center">
                            <img className="img" src={item.img} alt={item.id}/>
                            <div className="detail-container mt-2">
                                <p className="details">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="filter_products_container">
                <FilterProducts/>
            </div>
            <div className='viewmore-conatiner d-flex justify-content-center align-items-center'>
                <button className="btn view-butn pl-2 pr-2" type='button'>View More</button>
            </div>
        </div>
        <div className="mt-3">
            <BottomCard/>
        </div>
    </div>
)

export default Home;