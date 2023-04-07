import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import DashBoard from './pages/dashboard';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
