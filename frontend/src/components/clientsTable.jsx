import axios from "axios";
import { useEffect, useState } from "react";


function ClientsTable() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clients/allClients');
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);

      }
    }
    fetchClients();
  })

  return (
    <div className="table-responsive small employees-table">
      <h4>Client Details :</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Client Name</th>
            <th scope="col">Client Email</th>
            <th scope="col">Client Address</th>
            <th scope="col">Projects</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client._id}>
              <td>{index + 1}</td>
              <td>{client.client_name}</td>
              <td>{client.client_mail}</td>
              <td>{client.client_Address}</td>
              <td>{client.projects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsTable