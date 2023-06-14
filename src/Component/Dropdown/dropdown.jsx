import './dropdown.css'
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

export const DropDown = forwardRef((props, ref) => {
  const alphabétique = true
  const dropdownItem = props.data
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const dropDownContainerRef = useRef(null)

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

  useImperativeHandle(ref, () => ({
    getCurrentValue: () => current
  }))

  const chooseOption = (e) => {
    const selectedValue = e.target.getAttribute('data-value')
    setCurrent(selectedValue)
    setIsOpen(false)
    props.onChange(selectedValue)
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
})

export default DropDown
