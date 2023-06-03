import { Home, Navbar, PopularProducts, Shopping } from './components';
import './sass/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PopularProducts />
      <Shopping />
    </>
  );
}

export default App;
