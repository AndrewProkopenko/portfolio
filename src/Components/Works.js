import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

import WorkCategoryConteiner from './WorkCategoryConteiner'

import VueData from  '../data/vue-data.json'

function Works() {
    const [activeTab, setActiveTab] = useState(1)
 
    function hendlerTabs(e) {  
        e.preventDefault()
        const value = Number(e.target.getAttribute('data-tab-btn'))  
        setActiveTab(value)
    }

    function isActive(id) {
        if(id === activeTab ) { 
        return 'active'
        }
    }

    return (
        <div className='portfolio-works'>  
        <div className="container">
          <div className="portfolio-works_head">
              <p>
                Works presented here, <br/>
                click for more view on GitHub 
              </p>
              <ul>
                  <li className="active" onClick={hendlerTabs}>
                      <Link to="#" className={`${isActive(1)}`} onClick={hendlerTabs} data-tab-btn = '1'>
                          React 
                      </Link>
                  </li>
                  <li >
                      <Link to="#" className={`${isActive(2)}`} onClick={hendlerTabs} data-tab-btn = '2'>
                        Vue 
                      </Link>
                  </li>
                  <li  >
                      <Link to="#" className={`${isActive(3)}`} onClick={hendlerTabs} data-tab-btn = '3'>
                          HTML 
                      </Link>
                  </li>
              </ul> 
          </div>
          <div className="portfolio-works_content">
            
              <div className={`portfolio-works_content-box ${isActive(1)}`}>
                <WorkCategoryConteiner data={VueData}  />
              </div>
              <div className={`portfolio-works_content-box ${isActive(2)}`}>
                  <span>contacts2</span>
              </div>
              <div className={`portfolio-works_content-box ${isActive(3)}`}>
                  <span>contacts3</span>
              </div>
          </div>
        </div> 
      </div>
    )
}

export default Works
