import './App.css';
import ReservationForm from './components/reservationForm/ReservationForm';
import UserReservationTable from './components/userReservationTable/UserReservationTable';
import {AddMotorcycle} from './components/addMotorcycle/AddMotorcycle';
import {AddMotorcycle} from './components/deleteMotorcycle/deletemotorcycle';
import { Routes, Route } from 'react-router-dom';
import Motorcycles from './pages/motorcycles/Motorcycles';

function App() {
  return (
    <div className="app">
     
     
      <Routes>
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/" element={<Motorcycles />} />
        <Route path="/delete-motorcycle" element={<RemoveMotorcycle />} />
        <Route path="/myreservations" element={<UserReservationTable />} />
        <Route path="/ReservationForm" element={<ReservationForm />} />
      </Routes>
    </div>
  );
}

export default App;
