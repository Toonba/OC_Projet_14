import { configureStore } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { Employee } from '../Data/EmployeeList'

const initialState = {
  employee: [...Employee],
  state: '',
  department: '',
  dateOfBirth: '',
  startDate: ''
}

const ADD_EMPLOYEE = 'addEmployee'
const SELECT_STATE = 'selectState'
const SELECT_DEPARTMENT = 'selectDepartment'
const SELECT_DATE_OF_BIRTH = 'selectDateOfBirth'
const SELECT_START_DATE = 'selectStartDate'

export const addEmployee = (employeeData) => ({ type: ADD_EMPLOYEE, payload: employeeData })
export const selectState = (stateData) => ({ type: SELECT_STATE, payload: stateData })
export const selectDepartment = (departmentData) => ({ type: SELECT_DEPARTMENT, payload: departmentData })
export const selectDateOfBirth = (dateOfBirth) => ({ type: SELECT_DATE_OF_BIRTH, payload: dateOfBirth })
export const selectStartDate = (startDate) => ({ type: SELECT_START_DATE, payload: startDate })

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_EMPLOYEE:
        draft.employee = [...draft.employee, action.payload]
        return
      case SELECT_STATE: {
        draft.state = action.payload
        return
      }
      case SELECT_DEPARTMENT: {
        draft.department = action.payload
        return
      }
      case SELECT_DATE_OF_BIRTH: {
        draft.dateOfBirth = action.payload
        return
      }
      case SELECT_START_DATE: {
        draft.startDate = action.payload
        return
      }
      default:
        return state
    }
  })
}

const store = configureStore({ reducer: reducer })

export default store
