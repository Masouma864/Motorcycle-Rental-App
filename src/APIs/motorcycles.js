const getMotorcycleFromDB = async () => {
    const response = await fetch(`${URL}/api/v1/motorcycle`);
    const data = await response.json();
    return data;
  };
  
  export default getMotorcycleFromDB;