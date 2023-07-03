import React from 'react'
import ProductShow from './ProductShow';
import '../styles/ProductShow.css'
import AppleIcon from '@mui/icons-material/Apple';

function ProductProps({ data }) {
  return (
    <div className="mainDiv">
      <div>
        <h2>
          Ürünler <AppleIcon />
        </h2>
      </div>
      <div className="cardDiv">
        {data.map((item) => {
          return (
            <div>
              <ProductShow key={data.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductProps