import './dropdown.css'
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function DropDown({ data, actionType, dropDownSelector }) {
  // const test = useSelector((state) => state.department)
  const alphabétique = true
  const dropdownItem = data
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const dropDownContainerRef = useRef(null)
  const dispatch = useDispatch()

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
    const selectedValue = e.target.getAttribute('data-value')
    setCurrent(selectedValue)
    setIsOpen(false)
    console.log(current)
    dispatch(actionType(selectedValue))
  }

  const openClose = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e) => {
    if (dropDownContainerRef.current && !dropDownContainerRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (dropDownSelector === '') {
      setCurrent(null)
    }
  }, [dropDownSelector])

  return (
    <div ref={dropDownContainerRef} className="dropdown-container">
      <p>{dropdownItem.label}</p>
      <div className="dropdown">
        <div className={`dropdown-selected ${isOpen === true ? 'opened' : 'closed'}`} onClick={openClose}>
          {current === null ? '--Choose option--' : `${current}`}
          <i className={isOpen === true ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
        </div>
        <div className={`dropdown-item ${isOpen === true ? 'show' : 'hide'} ${dropdownItem.options.length > 5 ? 'long' : 'short'}`}>
          <div className="dropdown-item-content">
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
    </div>
  )
}

export default DropDown
