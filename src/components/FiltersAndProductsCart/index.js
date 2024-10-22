import CartItems from '../CartItems';
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
        <CartItems/>
        <CartItems/>
        <CartItems/>
      </div>
    </div>
  </div>
);

export default FilterProducts;


