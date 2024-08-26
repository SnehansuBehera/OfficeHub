import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import AdminDashboard from './components/adminDashboard.jsx';
import EmployeeDashboard from './components/EmployeeDashboard.jsx';
import store from './redux/store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/employee/dashboard' element={<EmployeeDashboard />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>



)
