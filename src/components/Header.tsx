export const Nav: React.FC = () => {
  return (
    <nav>
      <div className="inner">
        <a href="#" className="logo">
          <span className="dot"></span>
          ning.codes
        </a>
        <ul className="nav-links">
          <li><a href="#projects">projects</a></li>
          <li><a href="#about">about</a></li>
        </ul>
      </div>
    </nav>
  )
}
