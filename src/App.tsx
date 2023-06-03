import {
  BuyOnline,
  Home,
  Navbar,
  PopularProducts,
  Reviews,
  Shopping,
} from './components';
import './sass/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PopularProducts />
      <Shopping />
      <BuyOnline />
      <Reviews />
    </>
  );
}

export default App;
