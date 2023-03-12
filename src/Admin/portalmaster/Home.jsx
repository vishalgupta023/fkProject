import React from 'react'
import {Button,Table} from 'react-bootstrap';
import Employee from './role';
import {FaEdit} from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom';
//import '../Home.css';

//import "bootstrap/dist/css/bootstrap.min.css";

function Home(id) {
  let history = useNavigate();
  const handleEdit=(id,company,role)=>{
    localStorage.setItem('company',company);
    localStorage.setItem('role',role);
    localStorage.setItem('id',id);
  }
  const handleDelete = (e) =>{
    Employee.filter((item)=>{
      console.log(item.id)
      console.log(e)

      // return item.id
    })
    console.log(Employee)
    // Employee.splice(id,1)
    history('/portal_master')
  }
  return (
     <>
      <div style={{margin:"5em"}}>
      <nav className='navbar shadow-sm'>
          <div className="container-fluid mb-5">
              <h2>Portal Details</h2>
              <Link to="/add">
                <button type="button" className="btn btn-primary">+</button>
              </Link>
          </div>
      </nav>
        <Table striped border hover size='sm'>
            <thead>
                <tr>
                    
                    <th>Portal </th>
                    <th className='text-center'>Status</th>
                </tr>
            </thead>
            <tbody>
              {
                Employee && Employee.length>0
                ?
                Employee.map((item) => {
                  return(
                    <tr>
                      
                      <td>{item.company}</td>
                      <td className='text-center' >{item.role}</td>
                      <td className='text-end'>
                        <Link to={'/edit'}>
                          <FaEdit onClick={()=> handleEdit(item.id,item.company,item.role)}/>
                        </Link>
                        &nbsp;
                        <BsFillTrashFill onClick={(e)=> handleDelete(item.id)} alert='are you sure'/>
                      </td>
                    </tr>
                  )

                })
                :
                "No data available"
              }
            </tbody>
        </Table>
       
      </div>
    </>
    
  )
}

export default Home



