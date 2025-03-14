import React from 'react'
import ProductRow from './ProductRow'
// import './table.css'
import './table.css'

const ProductTable = ({products}) => {
  return (
    <div className='body'>
    <section className='tabody'>
      <table>
      <thead>
       <tr>
        <th>Name</th>
        <th>Price</th>

       </tr>
    </thead>
    <tbody>
        {products.map((product)=>(

             <ProductRow productprop={product}/>
        ))}

    </tbody>
      </table>
    </section>
    </div>
  )
}

export default ProductTable