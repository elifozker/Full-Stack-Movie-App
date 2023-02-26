import React from 'react'
import './list.css'
import ProductList from './ProductList/ProductList'

const List = ({ list }) => {
  return (
    <div className='movies'>
      <div className="movie-container">
        {list.map((item) => (
          <ProductList key={item.movieid} item={item} />
        ))}
      </div>


    </div>
  )
}

export default List
