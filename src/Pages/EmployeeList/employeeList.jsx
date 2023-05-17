import { useState } from 'react'
import Modal from '../../Modal/modale'

function EmployeeList() {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalClose = () => {
    setIsOpen(false) // Mettre à jour l'état isOpen dans le composant parent
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Faire apparaitre la modal</button>
      <Modal show={isOpen} onClose={handleModalClose} />
    </>
  )
}

export default EmployeeList
