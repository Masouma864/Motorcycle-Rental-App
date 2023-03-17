import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Motorcycles from '../pages/motorcycles/Motorcycles';
import AddMotorcycle from '../components/addMotorcycle/AddMotorcycle';
import UserReservationTable from '../components/userReservationTable/UserReservationTable';
import RemoveMotorcycle from '../components/deleteMotorcycle/deletemotorcycle';
import ReservationForm from '../components/reservationForm/ReservationForm';

const AuthenticatedRoute = () => (
  <>
   
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Motorcycles />} />
      <Route path="/add-motorcycle" element={<AddMotorcycle />} />
      <Route path="/myreservations" element={<UserReservationTable />} />
      <Route path="/delete-motorcycle" element={<RemoveMotorcycle />} />
      <Route path="/reserve" element={<ReservationForm />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;