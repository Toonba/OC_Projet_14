import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/index.css'
import CreateEmployee from './Pages/CreateEmployee/createEmployee'
import EmployeeList from './Pages/EmployeeList/employeeList.jsx'
import { Header } from './Component/Header/header'
import store from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<CreateEmployee />}></Route>
        <Route path="/employee" element={<EmployeeList />}></Route>
      </Routes>
    </Router>
  </Provider>
)
