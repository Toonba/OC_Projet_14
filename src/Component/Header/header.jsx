import Logo from '../../Asset/Wealth_Health.png'
import { Link, useLocation } from 'react-router-dom'
import '../../Styles/header.css'

export function Header() {
  const location = useLocation()
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo société wealt health" />
      </div>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Create Employee
        </Link>
        <Link to="/employee" className={location.pathname === '/employee' ? 'active' : ''}>
          Employee List
        </Link>
      </nav>
    </header>
  )
}