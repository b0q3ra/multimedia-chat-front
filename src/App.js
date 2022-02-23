import './App.css';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Chat from './pages/Chat/Chat'
import { useAuth } from './states/auth';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            {/*Login Route */}
            <Route path='/login' element={ user?.token ? <Navigate to='/chat'/> : <Login /> }/>

            {/*Register Route */}
            <Route path='/register' element={ user?.email ? <Navigate to='/login'/> : <Register /> }/>

            {/*Default Route */}
            <Route path='/chat' element={ user?.token ? <Chat /> : <Navigate to='/login' /> }/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
