import '../../Styles/createEmployeeForm.css'

export function CreateEmployeeForm() {
  return (
    <>
      <form action="#" id="create-employeer-form">
        <fieldset className="employee">
          <legend>Employee's information</legend>
          <div className="first-row">
            <div className="firstname">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="Steve" />
            </div>

            <div className="lastname">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Rogers" />
            </div>
          </div>
          <div className="second-row">
            <div className="birth-date">
              <label for="date-of-birth">Date of Birth</label>
              <input id="date-of-birth" type="text" />
            </div>

            <div className="start-date">
              <label for="start-date">Start Date</label>
              <input id="start-date" type="text"></input>
            </div>
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="first-row">
            <div className="street">
              <label for="street">Street</label>
              <input id="street" type="text" placeholder="1600, Pennsylvania Avenue NW" />
            </div>

            <div className="city">
              <label for="city">City</label>
              <input id="city" type="text" placeholder="Washington, DC" />
            </div>
          </div>

          <div className="second-row">
            <div className="state">
              <label for="state">State</label>
              <select name="state" id="state"></select>
            </div>

            <div className="zip">
              <label for="zip-code">Zip Code</label>
              <input id="zip-code" type="number" placeholder="20500" />
            </div>
          </div>
        </fieldset>

        <div className="department">
          <label for="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>

      <div className="button">
        <button className="save">Save</button>
      </div>
    </>
  )
}
