import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMotorcycles, deleteMotorcycle } from '../../redux/deletemotorcycle/deletemotorcycle';
import trashcan from '../../assets/trash.gif';
import { toast } from 'react-toastify';

const RemoveMotorcycle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMotorcycles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { motorcycles, loading, error } = useSelector((state) => state.delete);

  const handledelete = (motorcycleId) => {
    dispatch(deleteCar(carId)).then(() => {
      toast.info('Deleted Car Successfully');
    });
  };

  const deletemotorcycle = (id) => {
    handledelete(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="d-flex w-full del-container">
      <div className="d-flex w-full del-header">
        <h2>
          Delete A Motorcycle
        </h2>
        <img src={trashcan} alt="trash" className="trash" />
      </div>
      <ol className="list-group list-group-numbered del-list">
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle.id} className="list-group-item d-flex justify-content-between align-items-start">
            <span className="images">
              {' '}
              <img src={motorcycle.image_url} alt="img" className="del-motorcycle-image d-flex flex-column" />
            </span>
            <span className="motorcycles">{motorcycle.name}</span>
            <span className="del">
              <button
                type="button"
                onClick={() => deletemotorcycle(motorcycle.id)}
              >
                delete
              </button>
            </span>
          </li>

        ))}
      </ol>
    </div>
  );
};

export default RemoveMotorcycle;
