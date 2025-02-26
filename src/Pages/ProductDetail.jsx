import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import './DetailPage.css';
const Modal = React.memo(({ product, closeModal }) => {
  console.log("Modal rendered");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>X</button>
        <h3>{product.title}</h3>
        <img src={product.images[0]} alt={product.name} style={{ width: '300px' }} />
        <p>{product.description}</p>
        <p><strong>Narxi: </strong>${product.price}</p>
        <p><strong>Kategoriyasi: </strong>{product.category}</p>
        <div className="modal-buttons">
          <button className="kor">Korzinkaga qo'shish</button>
          <button className="bir">Hozir sotib olish</button>
        </div>
      </div>
    </div>
  );
});

const DetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    api.get(`/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Mahsulotni olishda xatolik yuz berdi...');
        setLoading(false);
      });
  }, [productId]);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []); 

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const memoizedProductDetails = useMemo(() => {
    if (product) {
      return (
        <>
          <h2 style={{
            color: 'black',
            fontWeight: '700'
          }}>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Narxi: </strong>${product.price}</p>
          <p><strong>Kategoriyasi: </strong>{product.category}</p>
        </>
      );
    }
    return null;
  }, [product]);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="detail-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '61vh'
      }}>
        <img src={product.images[0]} alt={product.name} className="detail-image" style={{
          width: '400px'
        }} />
        <div className="detail-info">
          {memoizedProductDetails}
          <div className="flexxc">
            <button className='kor' onClick={openModal}>Korzinka</button>
            <button className='bir'>Bir martalik tolov</button>
          </div>
        </div>
      </div>

      {modalVisible && (
        <Modal product={product} closeModal={closeModal} />
      )}
    </div>
  );
}

export default DetailPage;


