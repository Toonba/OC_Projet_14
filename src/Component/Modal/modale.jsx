import '../../Styles/modal.css'
import { useState, useEffect, useRef } from 'react'

function Modal({ show, onClose, text }) {
  const [isOpen, setIsOpen] = useState(show)
  const ref = useRef(null)

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      // setIsOpen(false)
      onClose()
    }
  }

  const handleClose = () => {
    // setIsOpen(false)
    onClose() // Appel de la fonction de rappel onClose
  }

  useEffect(() => {
    setIsOpen(show)
  }, [show])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      {isOpen ? (
        <div className="modal-container">
          <div ref={ref} className="modal">
            <i className="fa-solid fa-xmark close" onClick={() => handleClose()}></i>
            <p>{text === 'created' ? 'Employee Created' : 'You must fulfill all fields'}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
