import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Landing } from './components/landing/Landing';
import { About } from './components/about/About'
import { Pricing } from './components/pricing/Pricing'
import { Contact } from './components/contact/Contact'
import { Services } from './components/services/Services'

import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route
          index
          element={<Landing />}
        />
        <Route
          index
          element={<Pricing />}
        />
        <Route
          index
          element={<About />}
        />
        <Route
          index
          element={<Contact />}
        />
        <Route
          index
          element={<Services />}
        />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
