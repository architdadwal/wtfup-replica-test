import React from 'react'
import{ Link} from 'react-router-com'

export const Navbar = () => {
  return (
    <div className='menuIcon'>
<ul>
  <li>
    <Link to={"/"}>Home</Link>
  </li>
  <li>
    <Link to="/Fitness">Fitness</Link>
  </li>
  <li>
    <Link to="/Nutrition">Nutrition</Link>
  </li>
  <li>
    <Link to="/Gyms">Gyms</Link>
  </li>
  <li>
    <Link to="/becomepartner">Become WTF Partner</Link>
  </li>
  <li>
    <Link to="/Aboutus">About Us</Link>
  </li>
  <li>
    <Link to="/Login">Login</Link>
  </li>
</ul>
</div>
  )
}

