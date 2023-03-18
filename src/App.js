import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="app">
      <ToastContainer theme="colored" position="bottom-center" />
      {!isAuthenticated ? (
        <UnAuthenticatedRoute />
      ) : (
        <AuthenticatedRoute />
      )}
    </div>
  );
}

export default App;
