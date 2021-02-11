import React from 'react'

import IconGithub from '../../assets/icons/github.js'
import IconEyes from '../../assets/icons/eyes.js'

const  hendlerDescription = (e) => {  
    e.target.classList.toggle('active')
}

function SingleWorkItem({item, index, tabClassName}) {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 '  key={index}>
            <div className={`item `} style={{ backgroundImage: "url(" + item.img + ")" }}>
                <div className={`item-${tabClassName} `} style={{ backgroundImage: "url(" + item.imgWrap + ")" }} ></div>
                {
                    item.title && 
                    <h5>
                        {item.title}
                    </h5>
                }
                <div className='links'>
                        {
                            item.url &&
                            <a href={item.url} className={`link link-url link-${tabClassName} `}  target='_blank' rel='noopener noreferrer' > 
                                {IconGithub()}
                            </a>
                        }
                        {
                            item.viewUrl &&
                            <a href={item.viewUrl} className='link link-view' target='_blank' rel='noopener noreferrer' > 
                                {IconEyes()}
                            </a>
                        }
                
                </div>
                {
                    item.description && 
                    <div className='info-container'> 
                        
                        <i className='info-btn' onClick={hendlerDescription}>    
                        </i>
                        <div className='info'>
                            { item.description }
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default SingleWorkItem
