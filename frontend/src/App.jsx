import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import PostJob from './components/PostJob';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/post" element={<PostJob />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
