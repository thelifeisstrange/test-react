import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Services from './pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
import PhysiotherapyPage from './components/PhysiotherapyPage'
import PsycologyPage from './components/PsycologyPage'
import DietPage from './components/DietPage';
import GynecologistPage from './components/GynecologistPage';
import AyurvedaPage from './components/AyurvedaPage';
import NursingCarePage from './components/NursingCarePage';
import CaretakerPage from './components/CaretakerPage';
import MedicalEquipments from './components/MedicalEquipments';
import MedicalDiagnostics from './components/MedicalDiagnostics';
import TelerehabPage from './components/TelerehabPage';
import FootInsolePage from './components/FootInsolePage';


function App() {
  return (
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>  
              <Route path='/physiotherapy' element={<PhysiotherapyPage />}/> 
              <Route path='/psycology' element={<PsycologyPage />}/>  
              <Route path='/diet' element={<DietPage />}/>  
              <Route path='/gynecology' element={<GynecologistPage />}/>  
              <Route path='/ayurveda' element={<AyurvedaPage />}/>  
              <Route path='/nursingcare' element={<NursingCarePage />}/>  
              <Route path='/caretaker' element={<CaretakerPage />}/>  
              <Route path='/medicalequipments' element={<MedicalEquipments />}/>  
              <Route path='/diagnosticservices' element={<MedicalDiagnostics />}/>  
              <Route path='/telerehabilitation' element={<TelerehabPage />}/>  
              <Route path='/customisedfootinsoles' element={<FootInsolePage />}/>  

              {/* <Route path='/main' element={<Services />}/> */}
              <Route path = "/services" element={<Services />} />
            </Routes>  
          </BrowserRouter>
  );
}

export default App;
