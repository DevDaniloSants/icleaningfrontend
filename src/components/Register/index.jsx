// styles
import styles from './index.module.css';

// hooks
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { register, reset } from '../../slices/customerSlice';
import { useEffect, useState } from 'react';

const RegisterCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lat, setLat] = useState('');
  const [longitude, setLongitude] = useState('');
  const [inputError, setInputError] = useState('');

  const dispatch = useDispatch();
  const { loading, error, success, customer } = useSelector(
    (state) => state.customer,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create validations for email and phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11,}$/;

    // check validations in inputs
    if (name.length <= 3) {
      setInputError('Nome com no mínimo de 4 caracteres');
    } else if (!emailRegex.test(email)) {
      setInputError('Insira um email válido');
    } else if (!phoneRegex.test(phone)) {
      setInputError('telefone inválido');
    } else if (lat.length < 6 && longitude.length < 6) {
      setInputError(
        'insira sua localização de acordo com a latitude e a longitude',
      );
    } else if (error) {
      return;
    } else {
      const newCustomer = {
        name,
        email,
        phone,
        lat_x: lat,
        long_y: longitude,
      };

      dispatch(register(newCustomer));
      setInputError('');
      setName('');
      setEmail('');
      setPhone('');
      setLat('');
      setLongitude('');
    }
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.register}>
        <h1 className="title">Registrar Cliente</h1>
        <p className="subtitle">
          Área destinada para registros de novos clientes
        </p>
        <label>
          <span>Nome</span>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Telefone</span>
          <input
            type="tel"
            placeholder="(99) 99999-9999"
            name="telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            maxLength="11"
          />
        </label>
        <label>
          <span>Latitude</span>
          <input
            type="text"
            placeholder="-22.948"
            name="latitude"
            onChange={(e) => setLat(e.target.value)}
            value={lat}
          />
        </label>
        <label>
          <span>Longitude</span>
          <input
            type="text"
            placeholder="-43.1544"
            name="longitude"
            onChange={(e) => setLongitude(e.target.value)}
            value={longitude}
            maxLength="11"
          />
        </label>
        {!loading && <button className="btn">Registrar</button>}
        {loading && <button disabled>Aguarde</button>}
        {error && <p className="error">{error}</p>}
        {!error && inputError && <p className="error">{inputError}</p>}
        {success && customer && <p className="success">{customer.message}</p>}
      </form>
    </>
  );
};

export default RegisterCustomer;
