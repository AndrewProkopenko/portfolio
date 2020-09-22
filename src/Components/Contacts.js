import React from 'react'

function Contacts() {
    return (
        <div className='portfolio-contacts'>  
        <div id='contacts'></div>
        <div className="container">
          <div className="portfolio-contacts_head">
              <p className='portfolio-title'>
                Write me messages to contact 
              </p> 
          </div>
          <div className="portfolio-contacts_content">
              <ul>
                <li>
                  <a href='tg://resolve?domain=shemirg'> 
                      t.me/shemirg 
                  </a> 
                </li>  
                <li>
                  <a href="skype:i.andrewprokopenko?chat" >skype</a> 
                </li>  
                <li>
                  <a href="mailto:i.andrewprokopenko@gmail.com"> mail </a>  
                </li>  
              </ul> 
          </div>
           
        </div> 
      </div>
    )
}

export default Contacts
