import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './index.css';


const filterItems = [
  { name: 'Filter', symbo: 'CLEAR ALL' },
  { name: 'Type of Plants', symbo: '+' },
  { name: 'Price', symbo: '+' },
  { name: 'Nursery', symbo: '+' },
  { name: 'Location', symbo: '+' },
  { name: 'Indoor/Outdoor', symbo: '+' },
  { name: 'Maintenance', symbo: '+' },
  { name: 'Plant', symbo: '+' },
  { name: 'Schedule', symbo: '+' },
  { name: 'Color', symbo: '+' },
  { name: 'Seasonal', symbo: '+' },
  { name: 'Light', symbo: '+' },
];

const product_list = [{img:'https://res.cloudinary.com/draisdub8/image/upload/v1729407952/Easesmith%20Assignment/e1ce63ff429a0c018fd6e2e5dd614458_pekyro.jpg',name:'Monsterra',type:'Indoor Plant, Low maintenance',stars:'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg',rating:'4.9',prv_price:'₹ 359',new_price:'₹ 299'},
    {img:'https://res.cloudinary.com/draisdub8/image/upload/v1729408492/Easesmith%20Assignment/7973d62829a030074ad8b6ad34_wbdupl.jpg',name:'Monsterra',type:'Indoor Plant, Low maintenance',stars:'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg',rating:'4.9',prv_price:'₹ 359',new_price:'₹ 299'},
    {img:'https://res.cloudinary.com/draisdub8/image/upload/v1729408491/Easesmith%20Assignment/daa994fdb511faa82ea79a5ef58fbb1a_fer6mu.jpg',name:'Monsterra',type:'Indoor Plant, Low maintenance',stars:'https://res.cloudinary.com/draisdub8/image/upload/v1729409005/Easesmith%20Assignment/image_10_sj67np.jpg',rating:'4.9',prv_price:'₹ 359',new_price:'₹ 299'}
]



const CartItems = () => {
  const navigate = useNavigate();

  const onClickViewProduct = (name) => {
    navigate(`/thankyou/${name}`);
  }
  
  const onClickAddButn = () => {
    navigate('/cart');
  }

  return (
    <div className='products d-flex flex-row justify-content-between align-items-center mb-5'> 
        {product_list.map(item =>(
            <div className='each-product-items' key={uuidv4()}>
                <div className='img-container text-center'>
                    <img className='product-img' src={item.img} alt={item.name}/>
                    <button onClick={()=>onClickViewProduct(item.name)} className='view'>View Product</button>
                </div>
                <div className='product-details-container'>
                    <h1>{item.name}</h1>
                    <p className='type'>{item.type}</p>
                    <div className='rating-container'>
                        <img className='stars mr-3' src={item.stars} alt='rating-stars'/>
                        <p className='rating pt-2'>{item.rating}</p>
                    </div>
                    <div className='pricing d-flex justify-content-start align-items-center'>
                        <p className='mr-3 pvr_price'>{item.prv_price}</p>
                        <p>{item.new_price}</p>
                    </div>
                    <div className='button-container'>
                        <button className='product-butn' onClick={onClickAddButn}>- Add to cart +</button>
                        <button className='product-butn' style={{ backgroundColor: 'transparent', color:'#165315',border: 'solid #165315 1px' }}>Buy on Rent</button>
                    </div>
                </div>
            </div>
        ))}
      
    </div>
  );
};

const FilterProducts = () => (
  <div className="container d-flex flex-row justify-content-between">
    <ul className="filter-container p-3">
        {filterItems.map((item) => (
            <li key={item.name}>
                <div className="filter-items d-flex flex-row justify-content-between align-items-center">
                    <p className="filter-name">{item.name}</p>
                    <p className="filter-symbo">{item.symbo}</p>
                </div>
            </li>
        ))}
    </ul>
    <div className="product-container">
      <div className="no-of-products d-flex justify-content-start pt-2">
        <p>300 products</p>
        <div className="dropdown ml-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                SORT
            </button>
        </div>
      </div>
      <div className="item-cart-list d-flex flex-column justify-content-between align-items-center p-3">
        {CartItems()}
        {CartItems()}
        {CartItems()}
      </div>
    </div>
  </div>
);

export default FilterProducts;


