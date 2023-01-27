import { Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Updateuser from './Components/User/Updateuser';
import Movieuser from './Components/User/Movieuser';
import Admin from './Components/Admin/Admin';

import AddCardForm from './Components/addCardForm/AddCardForm';
import GamingUser from './Components/GamingUser/GamingUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<PrivateRoute />} />
        <Route path='/app/Private' element={<Admin />} />
        <Route path='/app/details' element={<Updateuser />} />
        <Route path='/app/movie' element={<Movieuser />} />
        <Route path='/user/movieadd' element={<AddCardForm />} />
        <Route path='/user/gameadd' element={<GamingUser />} />


      </Routes>
    </div>
  );
}

export default App;


