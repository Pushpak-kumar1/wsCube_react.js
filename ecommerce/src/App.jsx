
import axios from 'axios';
import { useState, useEffect } from 'react';
import Category from './Category';


function App() {

  let [loading, setLoading] = useState(true);
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setCatName] = useState('');
  
  let getCategory = () => {
    axios.get('https://dummyjson.com/products/category-list')
    .then( (res) => res.data)
    .then( (finalResponse) => {
        setFinalCategory(finalResponse)
        setLoading(false); // Set loading to false once data is fetched
    }); 
  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
    .then( (productRes) => productRes.data)
    .then( (finalRes) => {
      setFinalProduct(finalRes.products)
      setLoading(false); // Set loading to false once data is fetched
    });
  }

  useEffect( () => {
    getCategory();
    getProducts();
  }, [])


  useEffect( () => {
    if (catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then( (productRes) => productRes.data)
      .then( (finalRes) => {
        setFinalProduct(finalRes.products)
      })
    }
  }, [catName])

  let Pitems = finalProduct.map( (products, index) => {
    return (
      <ProductItems key={index} pdata={products} />
    )
  })

  return (
    <>
      <div className='py-[40px] pl-5 pr-5'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center font-bold mb-[30px] text-[40px]'> Our Products </h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>

              <div>
                <Category finalCategory={finalCategory} setCatName={setCatName} />
              </div>

              <div>
                <div className='grid grid-cols-3 gap-5 bg-gray-200'>
                    {/* { finalProduct.length >= 1 ?
                      Pitems
                       :
                      'No Product Found'
                    } */}
                    {loading ? 'Loading...' : (finalProduct.length >= 1 ? Pitems : 'No Product Found')}
                </div>
              </div>

          </div>
        </div>
     
      </div>
    </>
  )
}

export default App


function ProductItems( {pdata} ) {

  return (
    <div className='shadow-lg text-center pb-4'>
    <img src={pdata.thumbnail} alt={pdata.title} className='w-[100%] h-[220px]' />
    <h4>
      {pdata.title}
    </h4>
    <b>
      {pdata.price}
    </b>
  </div>
  )
}