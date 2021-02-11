import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 

import WorkCategoryConteiner from './WorkCategoryConteiner'


function Works() {
    const [activeTab, setActiveTab] = useState('react')
 
    function handleTabs(e, tab) {  
        e.preventDefault() 
        setActiveTab(tab)
    }
 
    const menu = (
      <ul>
          <li className="active" >
              <Link 
                to="#" 
                className={activeTab === 'react' ? 'active' : ''} 
                onClick={(e)=>{handleTabs(e, 'react')}}  
              >
                  React 
              </Link>
          </li>
          <li>
              <Link 
                to="#" 
                className={activeTab === 'vue' ? 'active' : ''} 
                onClick={(e)=>{handleTabs(e, 'vue')}}  
              >
                Vue 
              </Link>
          </li>
          <li>
              <Link 
                to="#" 
                className={activeTab === 'html' ? 'active' : ''} 
                onClick={(e)=>{handleTabs(e, 'html')}}  
              >
                  HTML 
              </Link>
          </li>
      </ul> 
    )

    return (
        <div className='portfolio-works'>  
        <div id='works'></div>
        <div className="container">
          <div className="portfolio-works_head">
              <p className='portfolio-title'>
                Works presented here, <br/>
                click for more view on GitHub 
              </p>
              { menu }
          </div>
          <div className="portfolio-works_content">

              <div className={`portfolio-works_content-box `}>
                 <WorkCategoryConteiner data={activeTab} tabClassName={`${activeTab}`} />
              </div>  
          </div>
        </div> 
      </div>
    )
}

export default Works
