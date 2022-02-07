import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddEdit from './Components/AddEdit';
import Home from './Components/Home';
import HomeTwo from './Components/HomeTwo';
import ListActors from './Components/ListActors';
import Navbare from './Components/Navbare';

function App() {
  return (
    <div className="App">
      <Navbare />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/addActor' element={<AddEdit />} />
        <Route path='/actors' element={<ListActors />} />
        {/* <Route path='/homeTwo' element={<HomeTwo />} /> */}

      </Routes>
    </div>
  );
}

export default App;
