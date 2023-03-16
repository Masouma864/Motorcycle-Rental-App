import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMotorcycle } from '../../redux/motorcycle/motorcycle';

const AddMotorcycle = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    name: '',
    description: '',
    price: '',
    model: '',
    year: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const  motorcycle = {
      name:  motorcycleData.name,
      description:  motorcycleData.description,
      price: motorcycleData.price,
      model: motorcycleData.model,
      year:  motorcycleData.year,
    };
    dispatch(createMotorcycle(motorcycle));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMotorcycleData({ ... motorcycleData, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <h2 className="w-full text-center">
          Add a New  Motorcycle
        </h2>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Enter  Motorcycle name"
            value={ motorcycleData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={ motorcycleData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full"
            placeholder="description"
            required
          />
        </div>
    
        <div>
          <input
            type="text"
            value={ motorcycleData.model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={ motorcycleData.price}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="date"
            value={ motorcycleData.year}
            name="year"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <button
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycle;