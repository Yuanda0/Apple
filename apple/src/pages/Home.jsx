import React from 'react'
import '../styles/Home.css'
import { useEffect, useState } from 'react'
import PopUpDiv from '../components/AboutDropDown';
import { useNavigate } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Details from '../components/Details';
import AppleIcon from '@mui/icons-material/Apple';
import MacBook from '../img/macbookair.jpg';
import MacStudio from '../img/macstudio.jpg';
import Iphone from '../img/iphone14.jpg';
import Loading from '../components/Loading';
function Home(){
    
    const [show, setShow] = useState(false);


    const [count, setCount] = useState(0)

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])

    if (count === 2) {
      setShow(false);
      setCount(0);
    }

    

  return (
    <div className='inclusiveHome'>
      {loading ? (
        <div className="home">
          <div className='homeButtonDiv'>
            <button
              className="dropdown_Button"
              onClick={() => {
                setShow(true);
                setCount(count + 1);
              }}
            >
              <ArrowDownwardIcon />
            </button>
          </div>

          {show ? (
              <PopUpDiv />
           
          ) : (
            <div className="homeMain">
              <h1 className="homeTitle">
                Neden Mi Apple? <AppleIcon />
              </h1>
              <div className="topPart">
                <div className="packs">
                  <LocalShippingIcon />
                  <p>Kapınıza Kadar Ücretsiz Teslimat. 📦</p>
                </div>
                <div className="packs">
                  <CreditCardIcon />
                  <p>Ödeme Yapmanın Harika Yolları. 💳</p>
                </div>
                <div className="packs">
                  <LocalGroceryStoreIcon />
                  <p>
                    Size özel hazırlanan Apple Store uygulamasından alışveriş
                    yapın. 🛒
                  </p>
                </div>
              </div>
              <Details />

              <div className="newProducts">
                <h1>Yeni Çıkanlar</h1>
              </div>
              <div className="news">
                <div className="newCards">
                  <h3>15 İNÇ MACBOOK AIR</h3>
                  <h5>Büyük Yenilikler.</h5>
                  <p>Başlangıç Fiyatı: 41.499 TL</p>
                  <img src={MacBook} alt="" />
                </div>
                <div className="newCards">
                  <h3>MAC STUDIO</h3>
                  <h5>Süper güçlü M2 Max ve M2 Ultra çip ile.</h5>
                  <p>Başlangıç Fiyatı: 64.999 TL</p>
                  <img src={MacStudio} alt="" />
                </div>
                <div className="newCards">
                  <h3>Iphone 14</h3>
                  <h5>A16 Bionic Çip ile çok güçlü.</h5>
                  <p>Başlangıç Fiyatı: 64.999 TL</p>
                  <img src={Iphone} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home