import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Layout = ({categories}) => {

     // Render the list of categories
  const renderCategories = () => {

    return categories.data.map(category => (

      <li key={category.id}>
        <Link to={`/categories/${category.id}`}>{category.title}</Link>
      </li>

    ));
  }

  return (
    <>
    
    <header>Ecommerce Store</header>

    <section>
      <nav>
        
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
       
        <ul>
          {categories.data && renderCategories()}
        </ul>

      </nav>

      <main>
        <Outlet/>
      </main>

  

     
    </section>

    <footer>
      <Link to='/'>Home</Link> | <Link to='/basket'>Basket</Link>
    </footer>
  </>
  )
}

export default Layout;