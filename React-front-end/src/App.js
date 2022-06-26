
import './index.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateContact from './components/CreateContact';
import ContactsPage from './components/ContactsPage';


function App() {
  return(
  <>
      <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/create" element={<CreateContact />}></Route>
          <Route path="/my_contacts" element={<ContactsPage />}></Route>

        </Routes>
      </div>
      </BrowserRouter>
  </>
  );
}
    
    
export default App;
