import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Motorcycles from '../pages/motorcycles/Motorcycles';
import AddMotorcycle from '../components/addMotorcycle/AddMotorcycle';

const AuthenticatedRoute = () => (
  <>
    <div className="main-container d-flex flex-row">
      <SideBar />
    </div>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Motorcycles />} />
      <Route path="/add-motorcycle" element={<AddMotorcycle />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;