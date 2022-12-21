import React from 'react';
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Products = () => {

  const catId = parseInt(useParams().id);

  const [ maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2} />
            <label htmlFor="2">Jeans</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3} />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={10000} onChange={e => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e => setSort('asc')} />
            <label htmlFor='asc' >Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='desc' value='desc' name='price' onChange={e => setSort('desc')}/>
            <label htmlFor='desc' >Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>50 To 90 Percent Off</h1>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products