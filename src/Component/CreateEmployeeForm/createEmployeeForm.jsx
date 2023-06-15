import '../../Styles/createEmployeeForm.css'
import DropDown from '../Dropdown/dropdown'
import { statesData } from '../../Data/stateData'
import { departmentData } from '../../Data/departmentData'
import { useRef, useState, useEffect } from 'react'
import Modal from '../Modal/modale'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, selectDepartment, addEmployee } from '../../store/store'

export function CreateEmployeeForm() {
  const Employee = useSelector((state) => state.employee)
  const [isOpen, setIsOpen] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const statesDataRefined = { label: statesData.label, options: statesData.options.map((element) => element.name) }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dateOfBirth = useSelector((state) => state.dateOfBirth)
  const startDate = useSelector((state) => state.startDate)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const state = useSelector((state) => state.state)
  const department = useSelector((state) => state.department)
  const dispatch = useDispatch()

  const handleModalClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = () => {
    const employeeData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: '',
      startDate: '',
      street: street,
      city: city,
      zipCode: zipCode,
      state: state,
      department: department
    }
    dispatch(addEmployee(employeeData))
    console.log(Employee)

    setIsOpen(!isOpen)
  }

  return (
    <>
      <form action="#" id="create-employeer-form">
        <fieldset className="employee">
          <legend>Employee's information</legend>
          <div className="first-row">
            <div className="firstname">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="Steve" onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="lastname">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Rogers" onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="second-row">
            <div className="birth-date">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input id="date-of-birth" type="text" />
            </div>

            <div className="start-date">
              <label htmlFor="start-date">Start Date</label>
              <input id="start-date" type="text" />
            </div>
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="first-row">
            <div className="street">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" placeholder="1600, Pennsylvania Avenue NW" onChange={(e) => setStreet(e.target.value)} />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Washington, DC" onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>

          <div className="second-row">
            <div className="state">
              <DropDown data={statesDataRefined} actionType={selectState} />
            </div>

            <div className="zip">
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" placeholder="20500" onChange={(e) => setZipCode(e.target.value)} />
            </div>
          </div>
        </fieldset>

        <div className="department">
          <DropDown data={departmentData} actionType={selectDepartment} />
        </div>
        <div className="button">
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>

      <Modal show={isOpen} onClose={handleModalClose} text={isValid === true ? 'created' : 'error'} />
    </>
  )
}
