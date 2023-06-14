import { type } from '@testing-library/user-event/dist/type'
import { useEffect } from 'react'
import { useState } from 'react'
import { Employee, EmployeeKeys } from '../../Data/EmployeeList'
import { Caret, HeadingContainer, CustomeTable, TBody, THead, TableTitle, SelectEntriesNumber, ShowEntriesNumber, TableWrapper } from './Styled'

function Table() {
  const [sort, setSort] = useState('no')
  const [currentSort, setCurrentSort] = useState('no')
  const [currentArray, setCurrentArray] = useState([...Employee])
  const [sortedEmployee, setSortedEmployee] = useState([...currentArray])
  const [entriesToShow, setEntriesToShow] = useState('10')
  const [pageNumber, setPageNumber] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesEmployee, setEntriesEmployee] = useState([...currentArray.slice((currentPage - 1) * entriesToShow, entriesToShow * currentPage)])
  const [isSearch, setIsSearch] = useState(false)

  // function handling sort 
  const sorting = (type, key) => {
    if (type === 'up') {
      if (key.keyName === 'Date of Birth' || key.keyName === 'Start Date') {
        const sorted = [...sortedEmployee.sort((a, b) => a[key.key].getTime() - b[key.key].getTime())]
        setSortedEmployee(sorted)
      } else {
        const sorted = [...sortedEmployee.sort((a, b) => a[key.key].localeCompare(b[key.key]))]
        setSortedEmployee(sorted)
      }
      setSort(type)
    } else if (type === 'down') {
      if (key.keyName === 'Date of Birth' || key.keyName === 'Start Date') {
        const sorted = [...sortedEmployee].sort((a, b) => b[key.key].getTime() - a[key.key].getTime())
        setSortedEmployee(sorted)
      } else {
        const sorted = [...sortedEmployee.sort((a, b) => b[key.key].localeCompare(a[key.key]))]
        setSortedEmployee(sorted)
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
        setSortedEmployee([...currentArray])
      }
    }
  }

  // function handling view depending on how many line should be shown
  const managePages = (event) => {
    if (event.target.classList.contains('fa-chevron-right')) {
      if (currentPage < pageNumber) {
        setCurrentPage(currentPage + 1)
      }
    }
    if (event.target.classList.contains('fa-chevron-left')) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  const handleEntriesSelection = (event) => {
    setEntriesToShow(event.target.value)
  }

  // function handling search feature
  const objectContainSearch = (object, search) => {
    for (let properties in object) {
      let value = object[properties]
      if (typeof value === 'object') {
        value = value.toLocaleDateString().toLowerCase()
      } else if (typeof value === 'number') {
        value = value.toString().toLowerCase()
      } else {
        value = value.toLowerCase()
      }
      if (value.includes(search)) {
        return true
      }
    }
  }

  const getEmployeeSearchList = (search) => {
    setCurrentArray(Employee.filter((employee) => objectContainSearch(employee, search)))
  }

  const handleSearch = (event) => {
    if (event.target.value !== '') {
      setIsSearch(true)
    } else {
      setIsSearch(false)
    }
    getEmployeeSearchList(event.target.value.toLowerCase())
  }
  
  // UseEffect
  useEffect(() => {
    setPageNumber(Math.ceil(Employee.length / entriesToShow))
  }, [entriesToShow])

  useEffect(() => {
    setEntriesEmployee([...sortedEmployee.slice((currentPage - 1) * entriesToShow, entriesToShow * currentPage)])
  }, [sortedEmployee, currentPage, entriesToShow])

  useEffect(() => {
    if (isSearch === false) {
      setCurrentArray([...Employee])
    }
  }, [isSearch])

  useEffect(() => {
    setSortedEmployee(currentArray)
  }, [currentArray])

  return (
    <>
      <TableWrapper>
        <TableTitle>Employee List</TableTitle>
        <SelectEntriesNumber>
          <div className="show">
            <p>Show</p>
            <select name="entries" id="entries" value={entriesToShow} onChange={handleEntriesSelection}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p>entries</p>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="search" placeholder="Search" onChange={(e) => handleSearch(e)} />
          </div>
        </SelectEntriesNumber>
        <CustomeTable id="myTable">
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
            {entriesEmployee.map((employee, index) => {
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
        </CustomeTable>
        <ShowEntriesNumber>
          <p>{`Showing ${entriesToShow > Employee.length ? Employee.length : entriesToShow} out of ${Employee.length}`}</p>
          <p className="pages">
            <i className={`fa-solid fa-chevron-left ${currentPage === 1 ? 'disabled' : ''}`} onClick={managePages}></i>
            {`${currentPage} / ${pageNumber}`}
            <i className={`fa-solid fa-chevron-right ${currentPage === pageNumber ? 'disabled' : ''}`} onClick={managePages}></i>
          </p>
        </ShowEntriesNumber>
      </TableWrapper>
    </>
  )
}

export default Table
