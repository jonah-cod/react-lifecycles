import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductsCard from './productsCard';


const Baseurl = 'https://fakestoreapi.com/products'

const Products = () => {
      const [products, setproducts] = useState(null);
      const {category} = useParams();
      const [url, seturl] = useState(`${Baseurl}/${category || ""}`)
      

      useEffect(() => {

        seturl(category? `${Baseurl}/category/${category || ""}` : `${Baseurl}`)

        fetch(url).then(res=>res.json()).then(data=>{
          setproducts(data)
        }).catch(err=>console.log(err));

        return()=>{
          console.log("After unmount")
          setproducts(null)
        }
      }, [category, url])
      
  return (
    <div className='products'>
      <h6>products</h6>
      <div className="product-listing">
        { products?.length? products.map(product=><ProductsCard key={product.id} product={product}/>) : "loading"}
      </div>
    </div>
  )
}

export default Products