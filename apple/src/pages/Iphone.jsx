import React from 'react'
import '../styles/Iphone.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IphoneProps from '../components/IphoneProps'
import Loading from '../components/Loading'
function Iphone() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
  },[])
  const fetchDatas = async () => {
      const response = await axios.get('http://localhost:3000/iphone');
      setData(response.data);
  }
  useEffect(()=>{
    fetchDatas();
  },[])
  return (
    <div>
      {loading ? (
        <div className="iphoneDiv">
          <IphoneProps data={data} /> </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Iphone