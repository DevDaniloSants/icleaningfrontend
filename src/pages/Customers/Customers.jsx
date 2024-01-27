// redux
import { getAllCustomer, reset } from '../../slices/customerSlice';

// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearch } from '../../hooks/useSearch';

// components
import Modal from '../../components/Modal/Modal';
import CustomersTable from '../../components/CustomersTable/CustomersTable';
import Loader from '../../components/Loader/Loader';

const Customers = () => {
  const [openModal, setOpenModal] = useState(false);

  // search hook
  const { search, searchChange } = useSearch();

  // redux
  const dispatch = useDispatch();
  const { loading, customers } = useSelector((state) => state.customer);

  // loading all customers
  useEffect(() => {
    if (!customers) {
      dispatch(getAllCustomer());
    }
  }, [dispatch, customers]);

  // check if state openModal is false and reset states
  const handleModal = () => {
    if (!openModal) {
      dispatch(reset());
      setOpenModal(!openModal);
    } else {
      setOpenModal(!openModal);
    }
  };

  return loading && !customers ? (
    <Loader />
  ) : (
    <div className="section">
      <h1 className="title">Clientes</h1>
      <p className="">Área destinada a visualização de clientes</p>
      <form className="search">
        <input
          type="text"
          name="search"
          onChange={(e) => searchChange(e.target.value)}
          placeholder="Pesquise por nome, email ou telefone..."
        />
      </form>
      <Modal isOpen={openModal} onClick={handleModal} />
      {customers && <CustomersTable data={search(customers)} order={false} />}
      <button className="btn" onClick={handleModal}>
        Calcular Rota
      </button>
    </div>
  );
};

export default Customers;
