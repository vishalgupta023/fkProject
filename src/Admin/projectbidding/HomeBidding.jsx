import React from 'react'
import {Button,Table} from 'react-bootstrap';
import Promaster from './Promaster';
import {FaEdit} from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import {Link,useNavigate} from 'react-router-dom';
//import '../Home.css';

//import "bootstrap/dist/css/bootstrap.min.css";

function Home1(id) {
  let history = useNavigate();
  const handleEdit=(id,project_title,portal,project_url,
    estimated_time,estimated_cost,remark)=>{
    localStorage.setItem('project_title',project_title);
    localStorage.setItem('portal',portal);
    localStorage.setItem('project_url',project_url);
    localStorage.setItem('estimated_time',estimated_time);
    localStorage.setItem('estimated_cost',estimated_cost);
    localStorage.setItem('remark',remark);
    localStorage.setItem('id',id);
  }
  const handleDelete = () =>{
    var index = Promaster.map(function(e){
      return e.id
    }).indexOf(id);
    Promaster.splice(index,1)
    history('/project')

  }
  return (
     <>
      <div style={{margin:"5em"}}>
      <nav className='navbar shadow-sm'>
          <div className="container-fluid mb-5">
              <h2>Bidding Details</h2>
              <Link to={"/add2"}>
                <button type="button" className="btn btn-primary">+</button>
              </Link>
          </div>
      </nav>
        <Table striped border hover size='sm'>
            <thead>
                <tr>
    
                    <th>Project Title </th>
                    <th >Portal</th>
                    <th >Project Url</th>
                    <th >Estimated Time</th>
                    <th >Estimated Cost</th>
                    <th >Remark</th>
                </tr>
            </thead>
            <tbody>
              {
                Promaster && Promaster.length>0
                ?
                Promaster.map((item) => {
                  return(
                    <tr>
                      
                      <td>{item.project_title}</td>
                      <td>{item.portal}</td>
                      <td>{item.project_url}</td>
                      <td>{item.estimated_time}</td>
                      <td>{item.estimated_cost}</td>
                      <td>{item.remark}</td>
                      <td className='text-end'>
                        <Link to={'/edit2'}>
                          <FaEdit onClick={()=> handleEdit(item.id,item.project_title,
                            item.portal,item.project_url,item.estimated_time,item.estimated_cost,item.remark)}/>
                        </Link>
                        &nbsp;
                        <BsFillTrashFill onClick={()=> handleDelete(item.id)} alert='are you sure'/>
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

export default Home1;



