import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/WrongPage.css'
import Exclamation from '../img/wrongImage.jpg'
function WrongPage() {
    const navigate = useNavigate();
  return (
    <div className="wrongPage">
      <div className="mark">
        <img src={Exclamation} alt="" />
      </div>
      <div className="items">
        <h1>Sanırım Karıştırdınız (^人^)</h1>
        <h2>Böyle Bir Sayfa Bulunamadı</h2>
        <button onClick={() => navigate("/")}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
}

export default WrongPage