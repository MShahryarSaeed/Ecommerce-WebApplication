import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fetcher';
import CategoryProduct from './CategoryProduct';

const Category = () => {

  const [products, setProducts] = useState({ errorMessage: "", data: [], });
  //from index.js Category Component
  const { categoryId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProducts(categoryId);
      setProducts(responseObject);
    };
    fetchData();
  }, [categoryId]);

  const renderProducts = () => {

    return products.data.map((product) => {

      return <CategoryProduct key={product.id} {...product}>{product.title}</CategoryProduct>;

    });
  }

  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}

      {products.data && renderProducts()}
    </div>
    );
}

export default Category;