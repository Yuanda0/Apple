import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
function PopUpDiv() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="popUpDiv">
        <h1>Ben Kimim?</h1>
        <hr />
        <p>
          Merhaba, ben Emir.Türkiye'de 10. sınıf öğrencisiyim ve yazılımla
          uğraşıyorum.Bu WebSite'yi React bilgilerimi pekiştirmek adına
          tasarladım ve kendimi zorlamak için bir kural koydum kendime: Aşırı
          zorda kalmadığım sürece dışardan yardım almayacaktım ; ki öyle de oldu
          en fazla 2-3 kere bakmışımdır o da css'ler için.Fakat bu sürenin baya
          bi uzamasına sebep oldu; 15-16 saatte anca bitirebildim. Bunun yanında
          React ile 2 aydır uğraşıyorum.
        </p>
        <h1>(ﾉ*ФωФ)ﾉ</h1>
        <hr />
      </div>
    </div>
  );
}

export default PopUpDiv