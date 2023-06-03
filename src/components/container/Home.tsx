import { homeImages } from '../../data/data';
function Home() {
  return (
    <section
      className='container'
      id='home'
    >
      {homeImages.map((homeImg) => {
        return (
          <div key={homeImg.id}>
            <img
              src={homeImg.img}
              alt='Home'
            />
            <a href='#'>{homeImg.name}</a>
          </div>
        );
      })}
    </section>
  );
}

export default Home;
