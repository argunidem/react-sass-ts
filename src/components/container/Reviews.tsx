import { reviews } from '../../data/data';
import { BsStarFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

export default function Reviews() {
  return (
    <section className='container'>
      <div className='title'>
        What Our <span>Customers Say</span>
      </div>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 2500 }}
        slidesPerGroup={1}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <div className='swiperBlah'>
                <img
                  src={review.reviewImg}
                  alt=''
                />
                <div>
                  <div className='icon'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                  <div className='reviewer'>
                    {review.reviewer} <a href=''>{review.reviewProduct}</a>
                  </div>
                  <p className='review'>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
