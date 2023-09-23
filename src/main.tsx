import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Client from './pages/Client.tsx';
import Api from './pages/Api.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Name from './pages/Name.tsx';
import Email from './pages/Email.tsx';
import Phone from './pages/Phone.tsx';
import axios from 'axios';
import Pagination from './pages/Pagination.tsx';

// axios.defaults.baseURL = 'http://localhost:3000/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="client-search" element={<Client />} />
      <Route path="api-search" element={<Api />}>
        <Route path="name" element={<Name />} />
        <Route path="email" element={<Email />} />
        <Route path="phone" element={<Phone />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="pagination" element={<Pagination />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
