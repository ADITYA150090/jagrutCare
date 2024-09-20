
import React, { useState } from 'react';
import './App.css'; // Optional for custom styling
import Navbar from './components/Navbar';


function App() {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState({ id: null, name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setCurrentService({
      ...currentService,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new service
  const addService = (e) => {
    e.preventDefault();
    if (!currentService.name || !currentService.description || !currentService.price) return;

    setServices([...services, { ...currentService, id: Date.now() }]);
    setCurrentService({ id: null, name: '', description: '', price: '' });
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Set the service to be updated
  const editService = (service) => {
    setCurrentService(service);
    setIsEditing(true);
  };

  // Update the existing service
  const updateService = (e) => {
    e.preventDefault();
    setServices(services.map(service => (service.id === currentService.id ? currentService : service)));
    setIsEditing(false);
    setCurrentService({ id: null, name: '', description: '', price: '' });
  };

  return (<>
  <Navbar/>
   
    <main id='parent'>
    <div className="container">
      <h1>Jarurat Care <br />Healthcare Services Manager</h1>

      <form onSubmit={isEditing ? updateService : addService}>
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={currentService.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={currentService.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={currentService.price}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? 'Update Service' : 'Add Service'}</button>
      </form>

      <ServiceList services={services} deleteService={deleteService} editService={editService} />
    </div>
    </main>
    </>
  );
}

const ServiceList = ({ services, deleteService, editService }) => (
  <div>
    <h2>Services List</h2>
    {services.length === 0 ? (
      <p>No services available. Please add some.</p>
    ) : (
      <ul className='service'>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> - {service.description} - Rs/.{service.price}
            <button onClick={() => editService(service)}>Edit</button>
            <button onClick={() => deleteService(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default App;
