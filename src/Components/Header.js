import React from 'react'
 

function Header() {

  function hendlerScroll(e) { 
    e.preventDefault()
    let target = e.target.getAttribute('data-href')
    let top = document.getElementById(target).getBoundingClientRect().top - 10 
    window.scrollTo({ 
      top: top,
      behavior: "smooth"
    })
  }
  return (
      <div className="  portfolio-header ">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className=" portfolio-header-title">
                  
                  <h1>
                    Portfolio
                  </h1>
                  <h5>
                    by Andrew Prokopenko
                  </h5>
              </div> 
          </div>

          <div className="col-6">
            <div className=" portfolio-header-menu">
              <ul>
                <li>
                  <span data-href='works' onClick={hendlerScroll}> 
                    Works
                  </span> 
                </li>
                <li>
                    <span data-href='contacts' onClick={hendlerScroll}> 
                      Contacts
                    </span> 
                </li>
                <li>
                  <span data-href='about' onClick={hendlerScroll}> 
                      About
                  </span>
                </li>
              </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
