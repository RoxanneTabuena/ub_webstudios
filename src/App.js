import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Landing } from './components/landing/Landing';
import { About } from './components/about/About'
import { Pricing } from './components/pricing/Pricing'
import { Work } from './components/work/Work'
import { Services } from './components/services/Services'
import { Book } from './components/book/Book';

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
          path="/pricing"
          element={<Pricing />}
          />
        <Route
          path="/about"
          element={<About />}
          />
        <Route
          path="/work"
          index
          element={< Work/>}
          />
        <Route
          path="/services"
          index
          element={<Services />}
        />
        <Route
          path="/book"
          index
          element={<Book />}
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
