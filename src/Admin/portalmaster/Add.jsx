import React, { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import Employee from './role';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add() {
    const[company,setName]=useState('');
    const[role,setRole]=useState('');

    let history= useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids = uuid();

        let uniqeId = ids.slice(0,8);
        let a = company,
        b = role;
        history('/');

        Employee.push({id:uniqeId,company:a,role:b});

    }

  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:"15em"}}>
            <Form.Group>
            <input class="form-control" type="text" placeholder='Portal Name'
              required onChange={(e)=>setName(e.target.value)}/><br/>
             <input class="form-control" type="text"placeholder='Staus' 
              required onChange={(e)=>setRole(e.target.value)}/>
            
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>

        </Form>
    </div>
  )
}

export default Add;