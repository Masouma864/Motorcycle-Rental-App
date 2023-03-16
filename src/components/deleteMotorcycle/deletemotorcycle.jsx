import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMotorcycles, deleteMotorcycle } from '../../redux/deletemotorcycle/deletemotorcycle';

const RemoveMotorcycle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMotorcycles());
  }, []);
  const { motorcycles, loading, error } = useSelector((state) => state.delete);

  const handledelete = (motorcycleId) => {
    dispatch(deleteMotorcycle(motorcycleId));
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
  <div>
    <h2>
      Delete a motorcycle
    </h2>
    <ol className="list-group list-group-numbered">
      {motorcycles.map((motorcycle) => (
        <li key={motorcycle.id} className="list-group-item d-flex justify-content-between align-items-start">
          {motorcycle.name}
          <span>
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