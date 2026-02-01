import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiHome, FiMessageSquare, FiUser, FiSettings, FiLogOut } from 'react-icons/fi'
import './Navigation.css'

export default function Navigation() {
  const items = [
    { icon: FiHome, label: 'Home' },
    { icon: FiMessageSquare, label: 'Chat' },
    { icon: FiUser, label: 'Account' },
    { icon: FiSettings, label: 'Settings' },
    { icon: FiLogOut, label: 'Logout' },
  ]

  const [active, setActive] = useState('Home')
  const [pfp, setPfp] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('selectedPfp') || ''
    setPfp(stored)
  }, [])

  function handleClick(item) {
    setActive(item.label)
    if (item.label === 'Account') {
      navigate('/profile')
    }
  }

  return (
    <nav className="rail" aria-label="Primary navigation">
      <ul className="rail-list">
        {/* pfp above home */}
        <li className="rail-li">
          <div className="rail-pfp">
            {pfp ? <img src={pfp} alt="pfp" /> : <FiUser className="rail-ico" aria-hidden="true" />}
          </div>
        </li>

        {items.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.label} className="rail-li">
              <button
                className={`rail-btn ${active === item.label ? 'active' : ''}`}
                onClick={() => handleClick(item)}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="rail-ico" aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
