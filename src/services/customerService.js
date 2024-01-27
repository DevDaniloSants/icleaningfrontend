import { requestConfig, api } from '../utils/config';

const register = async (data) => {
  const config = requestConfig('POST', data);

  try {
    const res = await fetch(api, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllCustomer = async () => {
  const config = requestConfig('GET');

  try {
    const res = await fetch(api, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getOrderDistance = async () => {
  const config = requestConfig('GET');

  try {
    const res = await fetch(api + 'routes', config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const customerService = {
  register,
  getAllCustomer,
  getOrderDistance,
};

export default customerService;
