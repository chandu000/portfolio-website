import logo from '../assets/Untitled.png'

import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import logo2 from'../assets/ChanduLogo.webp'
const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-1000'>
      <div className='flex flex-shrink-0 items-center'>
      <img className='mx-2 w-10 rounded-2xl'src={logo2} alt='logo' style={{ width: '50px', height: 'auto' }}/>
      </div>
      <div className='m-8 flex items-center jestify-center gap-4 text-2xl'>
      <a href='https://www.linkedin.com/in/chandu-pavan-budda-495ba9168/' target="_blank">
      <FaLinkedin/>
      </a>
      <a href='https://github.com/chandu000' target="_blank">
      <FaGithub/>
      </a>
      <FaSquareXTwitter/>
      <FaInstagram/>
      </div>
    </nav>
  )
}

export default NavBar