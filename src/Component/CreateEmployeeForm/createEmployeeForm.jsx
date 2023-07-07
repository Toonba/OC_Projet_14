import DropDown from '../Dropdown/dropdown'
import { statesData } from '../../Data/stateData'
import { departmentData } from '../../Data/departmentData'
import { useState } from 'react'
import Modal from '../Modal/modale'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, selectDepartment, addEmployee, selectDateOfBirth, selectStartDate } from '../../store/store'
import { CustomeForm } from './Styled'
import { DatePicker, config } from 'toonba-react-date-picker-library'

export function CreateEmployeeForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isValid, setIsValid] = useState(true)
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

  const manageDateOfBirth = (selectedValue) => {
    dispatch(selectDateOfBirth(selectedValue.toISOString()))
  }
  const manageStartDate = (selectedValue) => {
    dispatch(selectStartDate(selectedValue.toISOString()))
  }

  const handleSubmit = () => {
    if (firstName === '' || lastName === '' || dateOfBirth === '' || startDate === '' || street === '' || city === '' || zipCode === '' || state === '' || department === '') {
      setIsValid(false)
    } else {
      const employeeData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        zipCode: zipCode,
        state: state,
        department: department
      }
      dispatch(addEmployee(employeeData))
      setIsValid(true)
      setFirstName('')
      setLastName('')
      setStreet('')
      setCity('')
      setZipCode('')
      dispatch(selectDateOfBirth(''))
      dispatch(selectStartDate(''))
      dispatch(selectState(''))
      dispatch(selectDepartment(''))
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <CustomeForm action="#" id="create-employeer-form">
        <fieldset className="employee">
          <legend>Employee's information</legend>
          <div className="first-row">
            <div className="firstname">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="Steve" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="lastname">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Rogers" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="second-row">
            <div className="birth-date">
              <label htmlFor="last-name">Birth Date</label>
              <DatePicker minDate={new Date('01.01.1923')} maxDate={new Date('12.31.2023')} customStyle={config.lightTheme} getData={manageDateOfBirth} inputReset={dateOfBirth} />
            </div>

            <div className="start-date">
              <label htmlFor="start-date">Start Date</label>
              <DatePicker minDate={config.minDate} maxDate={new Date('12.31.2023')} customStyle={config.lightTheme} getData={manageStartDate} inputReset={startDate} />
            </div>
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="first-row">
            <div className="street">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" placeholder="1600, Pennsylvania Avenue NW" value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Washington, DC" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>

          <div className="second-row">
            <div className="state">
              <DropDown data={statesDataRefined} actionType={selectState} dropDownSelector={state} />
            </div>

            <div className="zip">
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" placeholder="20500" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
          </div>
        </fieldset>

        <div className="department">
          <DropDown data={departmentData} actionType={selectDepartment} dropDownSelector={department} />
        </div>
        <div className="button">
          <button className="save" type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </CustomeForm>

      <Modal show={isOpen} onClose={handleModalClose} text={isValid === true ? 'created' : 'error'} />
    </>
  )
}
