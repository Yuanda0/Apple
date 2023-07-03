import React from 'react'
import Show from './Show';

function Props({ data }) {

  const warning = "Şuan oluşturulmuş bir talebiniz yok"
  return (
    <div>
      <h2 style={{marginTop:"8vh"}}>TALEPLERİNİZ</h2>
      <div className='inclusiveDataDiv'>
        {
          data ? data.map((item)=>{
            return(
              <Show key={data.id} {...item} />
            )
          }) : null
        }
      </div>
    </div>
  );
}

export default Props
