import './App.css';
import ReservationForm from './components/reservationForm/ReservationForm';
import {AddMotorcycle} from './components/addMotorcycle/AddMotorcycle';
import { Routes, Route } from 'react-router-dom';
import Motorcycles from './pages/motorcycles/motorcycles';

function App() {
  return (
    <div className="App">
      <div className="main-container d-flex flex-row">
      <Motorcycles/>
        <ReservationForm />
      </div>
      <Routes>
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
      </Routes>
    </div>
  );
}

export default App;
