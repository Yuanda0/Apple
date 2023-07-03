import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import '../styles/Request.css'
import Props from './Props';
import AppleIcon from '@mui/icons-material/Apple'
function CreateRequest() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const id = Math.round(Math.random()*99999)
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleReqChange = (e) => {
    setReq(e.target.value);
  }
  const [req, setReq] = useState('');
    const handleClick = async (e) => {
        if (req === '' || title === '') {
            window.alert("Lütfen hem başlığı hem talebi giriniz.")
        }
        else {
            window.location.reload();
            const postresponse = axios.post('http://localhost:3000/support',{
                id,
                title,
                req
            })
            setData(postresponse.data);
            setTitle('');
            setReq('');
            window.alert("Talebiniz Alındı.")
            setData();
        }
    }

  useEffect(()=>{
      setLoading(true)
  },[])
  const fetchDatas = async () => {
      const response = await axios.get('http://localhost:3000/support');
      setData(response.data);
  }
  useEffect(()=>{
    fetchDatas();

  },[])
  return (
    <div>
      {loading ? (
        <div className="requestDiv">
          <div className="createRequest">
            <h1 className="title">
              Talep Oluşturma <AppleIcon />
            </h1>

            <h1 className="reqDesc">Talep Açıklaması</h1>
            <textarea
              value={req}
              onChange={handleReqChange}
              className="requestArea"
              cols="30"
              rows="10"
            />
            <div className="titleInputDiv">
              <input
                value={title}
                onChange={handleTitleChange}
                className="titleInput"
                type="text"
                placeholder="Talep Başlığı"
              />
            </div>
              <button onClick={handleClick} className="submitButton">
                Gönder
              </button>
          </div>
          <Props data={data} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default CreateRequest