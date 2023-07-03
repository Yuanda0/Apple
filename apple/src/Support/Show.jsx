import React from 'react';
import '../styles/Request.css';
import axios from 'axios';
function Show({ id, title, req, warning }) {
  const handleDelete = () => {
    const confirm = window.confirm("Bu talebi silmek istediğinize emin misiniz?")
    if (confirm) {
      window.location.reload();
      axios.delete(`http://localhost:3000/support/${id}`);
    }
  }
  return (
    <div className="datasDiv">
      <div className="cardReqDiv">
        <h1>{title}</h1>
        <p>{req}</p>
        <button className="deleteButton" onClick={handleDelete}>
          Sil
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Show
