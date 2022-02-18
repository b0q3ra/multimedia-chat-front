import './App.css';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Chat from './pages/Chat/Chat'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            {/*Login Route */}
            <Route path='/login' element={<Login />}/>

            {/*Register Route */}
            <Route path='/register' element={<Register />}/>

            {/*Default Route */}
            <Route path='/chat' element={<Chat />}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
