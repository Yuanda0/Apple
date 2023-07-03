import React from 'react'
import '../styles/Footer.css'
import AppleIcon from '@mui/icons-material/Apple';
function Footer() {
  return (
    <div className="footer">
      <p className='rights_reserved'>Tüm Hakları Saklıdır | Apple</p>
      <hr />
      <AppleIcon />
    </div>
  );
}

export default Footer