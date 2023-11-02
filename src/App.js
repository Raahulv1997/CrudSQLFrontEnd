
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Details from './components/Details';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';




function App() {
  
  return (
    <div>
   
   <NavigationBar/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path="/view/:id" element={<Details/>} />

   </Routes>

   
   
    </div>
  );
}

export default App;
