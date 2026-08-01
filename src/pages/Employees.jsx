import React, { useState } from 'react'
import '../styles/Employees.css';
import Search from '../components/Search';
import Button from "../components/Button";

import SymbolBtn from '../components/SymbolBtn';

function Employees() {

  const[searchValue, setSearchValue] = useState("");
  
  const employees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    department: "Development",
    designation: "Frontend Developer",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Patil",
    email: "priya.patil@example.com",
    phone: "9876501234",
    department: "Human Resources",
    designation: "HR Executive",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Amit Verma",
    email: "amit.verma@example.com",
    phone: "9876512345",
    department: "Testing",
    designation: "QA Engineer",
    status: "Inactive",
  },
  {
    id: "EMP004",
    name: "Sneha Kulkarni",
    email: "sneha.k@example.com",
    phone: "9876523456",
    department: "Design",
    designation: "UI/UX Designer",
    status: "Active",
  },
  {
    id: "EMP005",
    name: "Rohit Deshmukh",
    email: "rohit.d@example.com",
    phone: "9876534567",
    department: "Development",
    designation: "Backend Developer",
    status: "Active",
  },
  {
    id: "EMP006",
    name: "Neha Joshi",
    email: "neha.j@example.com",
    phone: "9876545678",
    department: "Finance",
    designation: "Accountant",
    status: "Inactive",
  },
  {
    id: "EMP007",
    name: "Karan Singh",
    email: "karan.s@example.com",
    phone: "9876556789",
    department: "Marketing",
    designation: "Marketing Executive",
    status: "Active",
  },
  {
    id: "EMP008",
    name: "Pooja Nair",
    email: "pooja.n@example.com",
    phone: "9876567890",
    department: "Support",
    designation: "Customer Support",
    status: "Active",
  },
];

const filteredEmployees = employees.filter((e)=>e.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  e.designation.toLowerCase().includes(searchValue.toLowerCase()) ||
  e.department.toLowerCase().includes(searchValue.toLowerCase())

)
  return (
    <>
   <div className='table-top-area'>
    <h2>Employees</h2>
     <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
     <Button title={"+ Add employee"}/>
    {/* <SymbolBtn symbol={<i class="fa-solid fa-user-plus"></i>}/> */}
   </div>
    
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
       
           {
          filteredEmployees.map((e)=>{
            return(
            
            <tr key={e.id}>
                <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.department}</td>
              <td>{e.designation}</td>
              <td>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-user-pen"></i>
                <i class="fa-solid fa-trash-can"></i>
              </td>
             
            </tr>
            
            )
          })
         }
       
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Employees