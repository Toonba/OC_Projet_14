import '../../Styles/createEmployeeForm.css'
import DropDown from '../../Plugin/dropdown'
import { statesData } from '../../Data/stateData'
import { departmentData } from '../../Data/departmentData'
import { useRef, useState, useEffect } from 'react'
import Modal from '../../Modal/modale'

export function CreateEmployeeForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const statesDataRefined = { label: statesData.label, options: statesData.options.map((element) => element.name) }
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const dateOfBirthRef = useRef(null)
  const startDateRef = useRef(null)
  const streetRef = useRef(null)
  const cityRef = useRef(null)
  const zipCodeRef = useRef(null)
  const stateRef = useRef(null)
  const departmentRef = useRef(null)

  const handleModalClose = () => {
    setIsOpen(false)
  }

  const handleStateChange = (selectedValue) => {
    stateRef.current.value = selectedValue
  }

  const handleDepartmentChange = (selectedValue) => {
    departmentRef.current.value = selectedValue
  }

  const handleSubmit = () => {
    let formcheck = []
    let formIsValid = false
    const employeeData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      startDate: startDateRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      state: stateRef.current.getCurrentValue(),
      department: departmentRef.current.getCurrentValue()
    }
    formcheck = []
    for (let properties in employeeData) {
      if (employeeData[properties] === null || employeeData[properties] === '') {
        formcheck.push(false)
      } else {
        formcheck.push(true)
      }
    }
    if (formcheck.includes(false)) {
      setIsValid(false)
      formIsValid = false
    } else {
      setIsValid(true)
      formIsValid = true
    }
    if (formIsValid === true) {
      console.log(employeeData)
    } else {
      console.log("vous n'avez pas remplis tous les champs")
    }
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
              <input type="text" id="first-name" placeholder="Steve" ref={firstNameRef} />
            </div>

            <div className="lastname">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Rogers" ref={lastNameRef} />
            </div>
          </div>
          <div className="second-row">
            <div className="birth-date">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input id="date-of-birth" type="text" ref={dateOfBirthRef} />
            </div>

            <div className="start-date">
              <label htmlFor="start-date">Start Date</label>
              <input id="start-date" type="text" ref={startDateRef} />
            </div>
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="first-row">
            <div className="street">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" placeholder="1600, Pennsylvania Avenue NW" ref={streetRef} />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Washington, DC" ref={cityRef} />
            </div>
          </div>

          <div className="second-row">
            <div className="state">
              <DropDown data={statesDataRefined} ref={stateRef} onChange={handleStateChange} />
            </div>

            <div className="zip">
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" placeholder="20500" ref={zipCodeRef} />
            </div>
          </div>
        </fieldset>

        <div className="department">
          <DropDown data={departmentData} ref={departmentRef} onChange={handleDepartmentChange} />
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
