import { useState } from 'react'
import { Employee, EmployeeKeys } from '../../Data/EmployeeList'
import { Caret, HeadingContainer, Table, TBody, Test, THead } from './Styled'

function EmployeeList() {
  const [sort, setSort] = useState('no')
  const [currentSort, setCurrentSort] = useState('no')
  const [sortedEmployee, setSortedEmployee] = useState([...Employee])

  const sorting = (type, key) => {
    if (type === 'up') {
      if (key.keyName === 'Date of Birth' || key.keyName === 'Start Date') {
        setSortedEmployee(sortedEmployee.sort((a, b) => a[key.key].getTime() - b[key.key].getTime()))
      } else {
        setSortedEmployee(sortedEmployee.sort((a, b) => a[key.key].localeCompare(b[key.key])))
      }
      setSort(type)
    } else if (type === 'down') {
      if (key.keyName === 'Date of Birth' || key.keyName === 'Start Date') {
        setSortedEmployee(sortedEmployee.sort((a, b) => b[key.key].getTime() - a[key.key].getTime()))
      } else {
        setSortedEmployee(sortedEmployee.sort((a, b) => b[key.key].localeCompare(a[key.key])))
      }
      setSort(type)
    }
  }

  const sortTable = (key) => {
    if (currentSort !== key.keyName) {
      sorting('up', key)
      setCurrentSort(key.keyName)
      setSort('up')
    } else {
      if (sort === 'no') {
        sorting('up', key)
      } else if (sort === 'up') {
        sorting('down', key)
      } else {
        setSort('no')
        setSortedEmployee([...Employee])
      }
    }
  }

  return (
    <>
      <Table id="myTable">
        <THead>
          <tr>
            {EmployeeKeys.map((key, index) => {
              return (
                <th onClick={() => sortTable(key)} data-value={key.keyName} key={`${index}-${key.keyName}`}>
                  <HeadingContainer>
                    <span>{key.keyName}</span>
                    <Caret>
                      {currentSort === key.keyName ? sort === 'no' ? <i className="fa-solid fa-caret-up"></i> : sort === 'up' ? <i className="fa-solid fa-caret-up active"></i> : <i className="fa-solid fa-caret-up unactive"></i> : <i className="fa-solid fa-caret-up"></i>}
                      {currentSort === key.keyName ? sort === 'no' ? <i className="fa-solid fa-caret-down"></i> : sort === 'down' ? <i className="fa-solid fa-caret-down active"></i> : <i className="fa-solid fa-caret-down unactive"></i> : <i className="fa-solid fa-caret-down"></i>}
                    </Caret>
                  </HeadingContainer>
                </th>
              )
            })}
          </tr>
        </THead>
        <TBody>
          {sortedEmployee.map((employee, index) => {
            return (
              <tr key={`${index}-${employee}`}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate.toLocaleDateString()}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth.toLocaleDateString()}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            )
          })}
        </TBody>
      </Table>
    </>
  )
}

export default EmployeeList
