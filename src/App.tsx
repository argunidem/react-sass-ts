import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import { Contact, Footer, Navbar, ScrollToTop } from './components';
import './sass/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/category/:categoryName'
          element={<Category />}
        />
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
