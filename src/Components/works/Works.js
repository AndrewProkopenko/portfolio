import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 

import WorkCategoryConteiner from './WorkCategoryConteiner'


function Works() {
    const [activeTab, setActiveTab] = useState('react')
 
    function handleTabs(e, tab) {  
        e.preventDefault() 
        setActiveTab(tab)
    }
 
    const menu = [
      {
        title: 'React', 
        id: 'react', 
        isActive: true
      },
      {
        title: 'Vue', 
        id: 'vue', 
        isActive: false
      },
      {
        title: 'PHP', 
        id: 'php', 
        isActive: false
      },
      {
        title: 'HTML', 
        id: 'html', 
        isActive: false
      },
    ];
   

    return (
        <div className='portfolio-works'>  
        <div id='works'></div>
        <div className="container">
          <div className="portfolio-works_head">
              <p className='portfolio-title'>
                Works presented here, <br/>
                click for more view on GitHub 
              </p>
              <ul>
                {
                  menu.map( menuItem => (
                    <li className={menuItem.isActive ? 'active' : ''} key={menuItem.id} >
                        <Link 
                          to="#" 
                          className={activeTab === menuItem.id ? 'active' : ''} 
                          onClick={(e)=>{handleTabs(e, menuItem.id)}}  
                        >
                            {menuItem.title}
                        </Link>
                    </li>
                  ))
                }
              </ul> 
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
