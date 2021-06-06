import styles from '../../components/menu/Menu.module.css';  
export default function Menu() {

  return (

<nav className="navbar is-link is-fixed-top">
    <div className="navbar-brand">
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="#">
             <span>Item 1</span>
        </a>
        <a className="navbar-item" href="#">
          <span>Item 2</span>
        </a>
        <a className="navbar-item" href="#">
          <span className="icon">
            <i className="fas fa-envelope"></i>
          </span>
          <span>Item 3</span>
        </a>
      </div>
    </div>
  </nav>
    )}