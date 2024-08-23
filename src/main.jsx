import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import { Homepage } from '../Pages/Home.jsx'
// import AboutPage from '../Pages/AboutPage.jsx'
import AboutPage from '../Pages/AboutPage/AboutPage.jsx'
import ServicesPage from '../Pages/ServicesPage.jsx'
import ContactPage from '../Pages/ContactPage.jsx'
import Projects from '../Pages/Projects.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="project" element={<Projects />} />
      </Route>
      <Route />
    </>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
