
import './index.css';
import Navbar from './components/Navbar';
import CreateContact from './components/CreateContact';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ContactsPage from './components/ContactsPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/mycontacts" element={<ContactsPage />}></Route>
        <Route path="/create" element={<CreateContact />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}
    
    
export default App;
