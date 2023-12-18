import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </>
  )

}

export default App;
