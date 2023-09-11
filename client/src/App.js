import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCategories } from './fetcher';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Basket from './components/Basket';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {

  // Define state to store category data received from the API
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });



  // Fetch categories data when the component mounts (All Categories)
  useEffect(() => {
    // fetchData is a function
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout categories={categories} />}>
          <Route index element={<Home />} />
          <Route path='categories/:categoryId' element={<Category />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/basket' element={<Basket />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
