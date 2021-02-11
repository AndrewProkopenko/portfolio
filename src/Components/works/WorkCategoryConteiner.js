import React from 'react' 

import ScrollAnimation from 'react-animate-on-scroll';

import SingleWorkItem from './SingleWorkItem'

import vue from  '../../data/vue-data.json'
import react from  '../../data/react-data.json'
import html from  '../../data/html-data.json'

function WorkCategoryConteiner(props) {

    const data = {vue, react, html} 
    const items = data[props.data]
  
    return (
        
        <ScrollAnimation  duration={0.5}  animateIn="fadeIn">
        <div className='row'>
            {
                items.map( (item, index) => (   
                    <SingleWorkItem key={index} item={item} index={index} tabClassName={props.tabClassName} /> 
                ))
            }
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 '>
                <div className='item empty-item'> 
                    <span>Your projects may be here soon</span>
                </div>
            </div>
        </div> 
        </ScrollAnimation>
    )
}

export default WorkCategoryConteiner
