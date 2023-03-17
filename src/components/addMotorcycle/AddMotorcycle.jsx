import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMotorcycle } from '../../redux/motorcycle/motorcycle';
import { useNavigate } from 'react-router-dom';
import './addmotorcycle.css';

const AddMotorcycle = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    model: '',
    year: '',
  });
  const navigate = useNavigate();
  const gohome = () => navigate('/');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('motorcycle[name]', motorcycleData.name);
    data.append('motorcycle[description]', motorcycleData.description);
    data.append('motorcycle[price]', motorcycleData.price);
    data.append('motorcycle[image]', motorcycleData.image);
    data.append('motorcycle[test_drive_fee]', motorcycleData.test_drive_fee);
    data.append('motorcycle[model]', motorcycleData.model);
    data.append('motorcycle[year]', motorcycleData.year);

    dispatch(createMotorcycle(data)).then(() => {
    gohome();
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setMotorcycleData((prevMotorcycleData) => ({
      ...prevMotorcycleData,
      image: file,
    }));
  };


  const handleInputChange = (event) => {

    setMotorcycleData({ ...motorcycleData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
      >
        <h2 className="title">
          Add a new  motorcycle
        </h2>
        <div className="w-full form-control">
          <input
            type="text"
            name="name"
            placeholder="Enter  Motorcycle name"
            value={motorcycleData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="w-full form-control"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={motorcycleData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full form-control"
            placeholder="Description"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={motorcycleData.model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
            className="w-full form-control"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={motorcycleData.price}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="w-full form-control"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Add an Image</span>
          <input type="file" name="image" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={handleImageChange} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Year</span>
          <input
            type="date"
            value={motorcycleData.year}
            name="year"
            onChange={handleInputChange}
            className="w-full form-control"
            required
          />
        </div>


        <button
          type="submit"
          className="btn btn-primary mb-3"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycle;