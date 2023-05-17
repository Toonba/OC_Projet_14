import '../../Styles/createEmployeeForm.css'
import DropDown from '../../Plugin/dropdown'
import { statesData } from '../../Data/stateData'
import { departmentData } from '../../Data/departmentData'

export function CreateEmployeeForm() {
  const statesDataRefined = { label: statesData.label, options: statesData.options.map((element) => element.name) }
  return (
    <>
      <form action="#" id="create-employeer-form">
        <fieldset className="employee">
          <legend>Employee's information</legend>
          <div className="first-row">
            <div className="firstname">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="Steve" />
            </div>

            <div className="lastname">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Rogers" />
            </div>
          </div>
          <div className="second-row">
            <div className="birth-date">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input id="date-of-birth" type="text" />
            </div>

            <div className="start-date">
              <label htmlFor="start-date">Start Date</label>
              <input id="start-date" type="text"></input>
            </div>
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="first-row">
            <div className="street">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" placeholder="1600, Pennsylvania Avenue NW" />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Washington, DC" />
            </div>
          </div>

          <div className="second-row">
            <div className="state">
              <DropDown data={statesDataRefined} />
            </div>

            <div className="zip">
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" placeholder="20500" />
            </div>
          </div>
        </fieldset>

        <div className="department">
          <DropDown data={departmentData} />
        </div>
      </form>

      <div className="button">
        <button className="save">Save</button>
      </div>
    </>
  )
}
