const getMotorcycleFromDB = async () => {
    const response = await fetch('http://localhost:3002/api/v1/motorcycle');
    const data = await response.json();
    return data;
  };
  
  export default getMotorcycleFromDB;