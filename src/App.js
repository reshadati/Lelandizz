import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { MainLayout } from './Layout';
import {HomePage} from './Pages/HomePage'


function App() {
  return (
    <BrowserRouter>
    <MainLayout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </MainLayout>
    </BrowserRouter>
  
  );
}

export default App;
