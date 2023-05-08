import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/index.css'
import CreateEmployee from './Pages/CreateEmployee/createEmployee'
import EmployeeList from './Pages/EmployeeList/employeeList.jsx'
import { Header } from './Component/Header/header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<CreateEmployee />}></Route>
      <Route path="/employee" element={<EmployeeList />}></Route>
    </Routes>
  </Router>
)
