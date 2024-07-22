import React from 'react'
// import { Link, } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor: props.mode, color: props.textcolor}}>
        <div className="container-fluid" style={{backgroundColor: props.mode, color: props.textcolor}}>
          <a className="navbar-brand" href="#" style={{fontSize: "20px",fontWeight: "700", marginRight: "5vw", color: props.textcolor}}>
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >
            <ul className="navbar-nav" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color: props.textcolor}} >
                  {props.listLink.l1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: props.textcolor}}>
                {props.listLink.l2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: props.textcolor}}>
                {props.listLink.l3}
                </a>
              </li>
              
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckChecked"
            onClick={props.toggleMode}
             checked= {props.checked}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode === "#e3f2fd" ? "dark":"light"}mode</label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar