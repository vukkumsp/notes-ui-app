import './Header.css'

function Header() {

  return (
    <>
      <a className='header' href='/' rel='noopener noreferrer'>
        <span className='protocol'>https:</span>
        <span className='subdomain'>//notes</span>
        <span className='domain'>.vukkumsp.com</span>
      </a>
    </>
  )
}

export default Header
