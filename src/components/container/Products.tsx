import { HiOutlineHeart } from 'react-icons/hi';

type ProductsProps = {
  img: string;
  price: number;
  name: string;
};

export default function Products({ img, price, name }: ProductsProps) {
  return (
    <div className='product'>
      <img
        src={img}
        alt=''
        className='product_img'
      />
      <div className='nameAndPrice'>
        <div className='name'>{name}</div>
        <div>${price}</div>
      </div>
      <div className='btns'>
        <button>Add To Cart</button>
        <HiOutlineHeart className='heart' />
      </div>
    </div>
  );
}
