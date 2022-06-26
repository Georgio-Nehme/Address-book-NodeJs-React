import Navbar from './Navbar';
import ContactsPage from './ContactsPage'
import CreateContact from './CreateContact';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


const userRoutes = () => {
    return ( 
        <div className="user_routes">
            <BrowserRouter>
            <Navbar />
            <div className='container'>
            <Routes>
                <Route path="/mycontacts" element={<ContactsPage />}></Route>
                <Route path="/create" element={<CreateContact />}></Route>
            </Routes>
            </div>
        </BrowserRouter>

        </div>
     );
}
 
export default userRoutes;