import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href='/map'>
      <a>Map</a>
    </Link>
    <Link href='/bathrooms'>
      <a>Bathrooms</a>
    </Link>
    <Link href='/add'>
      <a>Add Bathroom</a>
    </Link>
    <Link href='/signup'>
      <a>Signup</a>
    </Link>
    <Link href='/me'>
      <a>Account</a>
    </Link>
  </NavStyles>
)

export default Nav
