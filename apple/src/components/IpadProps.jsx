import React from 'react'
import '../styles/ProductShow.css'
import AppleIcon from '@mui/icons-material/Apple';
import '../styles/ProductShow.css'
import IpadShow from './IpadShow';
function IpadProps({ data }) {
  return (
    <div className="mainDiv">
      <div>
        <h2>
          iPad <AppleIcon />
        </h2>
      </div>
      <div className="cardDiv">
        {data.map((item) => {
          return (
            <div>
              <IpadShow key={data.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IpadProps