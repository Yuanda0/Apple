import React from 'react'
import '../styles/Support.css';
import Pro14 from '../img/Pro14.jpg';
import watchUltra from '../img/watchUltra.jpg';
import AppleIcon from '@mui/icons-material/Apple'
import iPad from '../img/iPadAir.jpg'
import M1Mac from '../img/m1macbook.jpg';
import HandymanIcon from '@mui/icons-material/Handyman';
import PasswordIcon from '@mui/icons-material/Password';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

function Support() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const handleChange = (e) => {
      setValue(e.target.value);
  }
  useEffect(()=>{
      setLoading(true);
  },[])
  return (
    <div className='supMain'>
      {loading ? (
        <div className="supportDiv">
          <div className="title">
            <h1 className="supTitle">
              Apple Destek
              <AppleIcon />
            </h1>
            <button
            onClick={() => navigate("createrequest")}
            className="navigateToCreateReq"
          >Talep Oluştur</button>
          </div>
          <div className="supportChoises">
            <div>
              <img width={100} height={100} src={Pro14} alt="" />
              <p>iphone Destek</p>
            </div>
            <div>
              <img width={100} height={100} src={M1Mac} alt="" />
              <p>Mac Destek</p>
            </div>
            <div>
              <img width={100} height={100} src={iPad} alt="" />
              <p>iPad Destek</p>
            </div>
            <div>
              <img width={100} height={100} src={watchUltra} alt="" />
              <p>Watch Destek</p>
            </div>
          </div>

          <div className="multiChoises">
            <div className="password">
              <PasswordIcon />
              <p>Apple Kimliğinizi veya parolanızı mı unuttunuz?</p>
            </div>
            <div>
              <HandymanIcon />
              <p>Apple Onarım</p>
            </div>
            <div>
              <ReceiptIcon />
              <p>Faturalama ve abonelikler</p>
            </div>
          </div>
          <h1 className="searchTitle">Daha fazla konu arayın</h1>
          <div className="searchDiv">
            <SearchIcon className="icon" />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Destek sitesinde ara"
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Support