import React from 'react'
import '../styles/Store.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductProps from '../components/ProductProps'
import Ipad from './Ipad'
import Loading from '../components/Loading'
function Store() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
  },[])
  const [data, setData] = useState([])
  const fetchDatas = async() => {
    const response = await axios.get("http://localhost:3000/products");
    setData(response.data);
  }

  useEffect(()=>{
    fetchDatas();
  },[])
  return (
    <>
      {loading ? (
        <div className="store">
          <ProductProps data={data} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Store