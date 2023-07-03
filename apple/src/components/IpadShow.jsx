import React from 'react'
import '../styles/ProductShow.css';
function IpadShow({ id, content, price, img }) {
  if (id) {
    return (
      <div className="card" >
        <div className="productCard">
          <img width={300} height={300} src={img} alt="" />
          <h1>{content}</h1>
          <h4>{price} TL</h4>
        </div>
      </div>
    );
  }

}

export default IpadShow