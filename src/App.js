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
import Add2 from "./Admin/projectbidding/Add";
import Edit2 from "./Admin/projectbidding/Edit";
import Add from "./Admin/portalmaster/Add"
import Edit from "./Admin/portalmaster/Edit"
import Dependents from './Employee/EmployeeComponent/Depenents';
import LeaveApp from './Employee/EmployeeComponent/LeaveApp/LeaveApp';
import Country from './HumanResources/HR-Components/Country/Country';
import Salary from "./HumanResources/HR-Components/salary/ProductList"
import DepartmentHr from './HumanResources/HR-Components/Department/Department';
import PositionHr from './HumanResources/HR-Components/Position/Position.jsx'
import State from './HumanResources/HR-Components/State/State';

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
        <Route path='/add2' element={<Add2/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/edit2' element={<Edit2/>} />
    {/* ADMIN PAFGE ROUTES */}

    {/* EMPLOYEE PAGE ROUTING */}
        <Route path='/students/personal_info' element={<PersonalInfo/>} />
        <Route path='/students/education' element={<Education/>} />
        <Route path='/students/work_experience' element={<WorkExp/>} />
        <Route path='/students/dependents' element={<Dependents/>} />
        <Route path='/students/leave_application' element={<LeaveApp/>} />
    {/* EMPLOYEE PAGE ROUTING */}
        {/* <Route path='/' element={<SideNavbar heading='Admin'/>}/> */}
        <Route path='/' element={<HumanResources heading='HR'/>}/>
        <Route path='/students' element={<Employee heading='Employee'/>}/>
        <Route path='/city' element={<City/>} />
        <Route path='/country' element={<Country/>} />
        <Route path='/salary' element={<Salary/>} />
        <Route path='/department' element={<DepartmentHr/>} />
        <Route path='/position' element={<PositionHr/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/application' element={<LeaveApp/>} />
        <Route path='/role' element={<Role/>} />
        <Route path='/user' element={<PersonalInfo/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
