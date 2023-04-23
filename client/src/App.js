import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Main from './pages/Main';
import Test from './pages/Test';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// 晚点，homepage里link到detail page的时候需要，视频13 3:00处
export function ProtectedRoute(props){
  if(localStorage.getItem('spendsmart.user')){
    return props.children
  }else{
    return <Navigate to='/login'/>
  }
  // return props.children
}


export default App;
