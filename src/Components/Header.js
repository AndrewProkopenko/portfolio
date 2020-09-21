import React from 'react'

function Header() {
    return (
        <div className="  portfolio-header ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className=" portfolio-header-title">
                    
                    <h1>
                      Portfolio
                    </h1>
                    <h5>
                      by Andrew Prokopenko
                    </h5>
                </div> 
            </div>

            <div className="col-12 col-md-6">
              {/* <div className=" portfolio-header-menu">
                <ul>
                  <li>
                    <Link> 
                      Works
                    </Link> 
                  </li>
                  <li>
                      <Link> 
                        Contacts
                      </Link> 
                  </li>
                  <li>
                    <Link> 
                        About
                    </Link>
                  </li>
                </ul>
              </div> */}
          </div>
          </div>
        </div>
      </div>
    )
}

export default Header
