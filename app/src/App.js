import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import DashBoard from './pages/dashboard';
import Example1 from './pages/example1';
import Example2 from './pages/example2';
import Example3 from './pages/example3';
import Example4 from './pages/example4';
import Example5 from './pages/example5';
import Example6 from './pages/example6';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/example1" element={<Example1 />}></Route>
        <Route path="/example2" element={<Example2 />}></Route>
        <Route path="/example3" element={<Example3 />}></Route>
        <Route path="/example4" element={<Example4 />}></Route>
        <Route path="/example5" element={<Example5 />}></Route>
        <Route path="/example6" element={<Example6 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
