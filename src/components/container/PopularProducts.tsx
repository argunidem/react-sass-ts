import { products } from '../../data/data';
import Products from './Products';

function PopularProducts() {
  return (
    <section className='container min_100vh'>
      <div className='popular_container'>
        <div className='title popular'>
          Popular <span>products</span>
        </div>
        <div className='nextAndPrev'>
          <div>Previous</div>
          <span>|</span>
          <div>Next</div>
        </div>
      </div>
      <div className='product_container'>
        {products.map((product) => {
          return (
            <Products
              key={product.id}
              {...product}
            />
          );
        })}
      </div>
    </section>
  );
}
export default PopularProducts;
