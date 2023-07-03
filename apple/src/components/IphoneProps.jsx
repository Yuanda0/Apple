import React from 'react'
import '../styles/ProductShow.css'
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/ProductShow.css'
import IphoneShow from './IphoneShow';
function IphoneProps({ data }) {
  return (
    <div className="mainDiv">
      <div>
        <h2>
          iPhone <AppleIcon />
        </h2>
      </div>
      <div className="cardDiv">
        {data.map((item) => {
          return (
            <div>
              <IphoneShow key={data.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IphoneProps