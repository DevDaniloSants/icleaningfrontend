export const api = 'https://icleaningbackend.onrender.com/v1/customer/';

export const requestConfig = (method, data) => {
  let config;

  if (method === 'DELETE') {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return config;
};
