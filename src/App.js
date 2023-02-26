import React from 'react'
import "./index.css"
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes } from 'react-router-dom';
import {   Route} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import HumanResources from './HumanResources/HumanResources'
import Employee from './Employee/Employee'
import City from './HumanResources/HR-Components/City'
import Role from './Admin/Role';
import Department from './Admin/Department';
import Position from './Admin/Position';
import Home from './Admin/portalmaster/Home'
import HomeBidding from './Admin/projectbidding/HomeBidding'
import PersonalInfo from './Employee/EmployeeComponent/PersonalInfo'
import Education from './Employee/EmployeeComponent/Education/Education'
import WorkExp from './Employee/EmployeeComponent/WorkExp/WorkExp';

export default function App() {
  return (
    <div>
  
        <Navbar name="Aryan"/>
        <BrowserRouter>
        <Routes>
    {/* ADMIN PAFGE ROUTES */}
        <Route path='/role' element={<Role/>} />
        <Route path='/position' element={<Position/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/project_bidding' element={<HomeBidding/>} />
        <Route path='/portal_master' element={<Home/>} />
    {/* ADMIN PAFGE ROUTES */}

    {/* EMPLOYEE PAGE ROUTING */}
        <Route path='/employee/personal_info' element={<PersonalInfo/>} />
        <Route path='/employee/education' element={<Education/>} />
        <Route path='/employee/work_experience' element={<WorkExp/>} />
    {/* EMPLOYEE PAGE ROUTING */}
        <Route path='/' element={<SideNavbar heading='Admin'/>}/>
        <Route path='/human-resources' element={<HumanResources heading='HR'/>}/>
        <Route path='/employee' element={<Employee heading='Employee'/>}/>
        <Route path='/human-resources/city' element={<City/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
