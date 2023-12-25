import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import CustomerCare from './components/pages/CustomerCare';
import ServicePage from './components/pages/service';
import CompanyLocation from './components/pages/CompanyLocation';



function App() {
  return (
<div className='App'>
 <Navbar/>

 <Routes>

 <Route path="/" element={<HomePage/>} />    
 <Route path='about' element={<AboutPage/>} />  
 <Route path='location' element={<CompanyLocation/>} />  
 <Route path='service' element={<ServicePage/>} />  
 <Route path='customercare' element={<CustomerCare/>} />  
</Routes>

  </div>  
  );
}

export default App;
