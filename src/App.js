import './App.css';
import ReservationForm from './components/reservationForm/ReservationForm';
import {AddMotorcycle} from './components/addMotorcycle/AddMotorcycle';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row">
      
        <ReservationForm />
      </div>
      <Routes>
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
      </Routes>
    </div>
  );
}

export default App;
