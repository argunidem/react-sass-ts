import {
  BuyOnline,
  PopularProducts,
  Reviews,
  Shopping,
  Categories,
} from '../components/index';

function Home() {
  return (
    <main>
      <Categories />
      <PopularProducts />
      <Shopping />
      <BuyOnline />
      <Reviews />
    </main>
  );
}

export default Home;
