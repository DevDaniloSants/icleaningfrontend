import PropTypes from 'prop-types';

// styles
import styles from './Modal.module.css';

// redux
import { getOrderDistance } from '../../slices/customerSlice';

// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// components
import CustomersTable from '../CustomersTable/CustomersTable';

const Modal = ({ isOpen, onClick }) => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.customer);

  useEffect(() => {
    // check if order exists and get the clients
    if (!order) {
      dispatch(getOrderDistance());
    }
  }, [dispatch, order]);

  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <button onClick={onClick} className={styles.closeModal}>
            X
          </button>
          <h3>Rota de Clientes</h3>
          <p>Otimizamos a melhor rota com base nos dados fornecidos pelo nosso banco </p>
          {order && <CustomersTable data={order} order={true} />}
        </div>
      </div>
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
