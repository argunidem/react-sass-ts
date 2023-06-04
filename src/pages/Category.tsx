import { useParams } from 'react-router-dom';

function Category() {
  const params = useParams();

  return <div className='container'>Category: {params.categoryName}</div>;
}
export default Category;
