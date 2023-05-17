import '../Styles/dropdown.css'
import { useState, useEffect, useRef } from 'react'

function DropDown({ data }) {
  const alphabétique = true
  const dropdownItem = data
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const ref = useRef(null)

  if (alphabétique === true) {
    dropdownItem.options.sort(function (a, b) {
      if (a < b) {
        return -1
      } else if (a > b) {
        return 1
      } else {
        return 0
      }
    })
  }

  const chooseOption = (e) => {
    setCurrent(e.target.getAttribute('data-value'))
    setIsOpen(false)
  }

  const openClose = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="dropdown-container">
      <p>{dropdownItem.label}</p>
      <div className="dropdown">
        <div className={`dropdown-selected ${isOpen === true ? 'opened' : 'closed'}`} onClick={openClose}>
          {current === null ? '--Choose option--' : `${current}`}
          <i className={isOpen === true ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
        </div>
        <div className={`dropdown-item ${isOpen === true ? 'show' : 'hide'} ${dropdownItem.options.length > 5 ? 'long' : 'short'}`}>
          {dropdownItem.options.map((element) => {
            return (
              <span key={element} data-value={element} onClick={(e) => chooseOption(e)} className={current === element ? 'active' : ''}>
                {element}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DropDown
