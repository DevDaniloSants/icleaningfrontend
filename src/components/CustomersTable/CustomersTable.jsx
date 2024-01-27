import PropTypes from 'prop-types';

const CustomersTable = ({ data, order }) => {
  {
    /* check if order is false  */
  }
  if (!order) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {/* check if data is array  */}
          {Array.isArray(data) &&
            data.map((client) => (
              <tr key={client.id}>
                <td data-th="ID">{client.id}</td>
                <td data-th="Name">{client.name}</td>
                <td data-th="Email">{client.email}</td>
                <td data-th="Telefone">{client.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  return (
    <table id="table_routes">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Distância</th>
        </tr>
      </thead>
      <tbody>
        {/* check if data is array  */}
        {Array.isArray(data) &&
          data.map((client) => (
            <tr key={client.id}>
              <td data-th="ID">{client.id}</td>
              <td data-th="Name">{client.name}</td>
              <td data-th="Distância">{client.distance}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

CustomersTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ).isRequired,
  order: PropTypes.bool.isRequired,
};

export default CustomersTable;
