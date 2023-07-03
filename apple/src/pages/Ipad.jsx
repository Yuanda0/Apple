import React from 'react'
import '../styles/iPad.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IpadProps from '../components/IpadProps'
import Loading from '../components/Loading'
function Ipad() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(()=>{
    setLoading(true)
  },[])
  const fetchDatas = async () => {
      const response = await axios.get('http://localhost:3000/ipad');
      setData(response.data);
  }
  useEffect(()=>{
    fetchDatas();
  },[])
  return (
    <>
      {loading ? (
    <div className='ipadDiv'>
      <IpadProps data={data} />
    </div>
    ) : (
          <Loading />
    )}
    </>
  )
}

export default Ipad