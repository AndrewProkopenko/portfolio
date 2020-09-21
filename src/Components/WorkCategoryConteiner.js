import React from 'react'

function WorkCategoryConteiner(props) {
    // React.useEffect( () => { 
    //     console.log(props.data)
    // })
    return (
        <div>
            {
                props.data.map( (item, index) => ( 
                    <div key={index}>
                        <img src={window.location.origin + `/img/${item.img}`} alt={'no img'} />
                    </div>
                ))
            }
        </div>
    )
}

export default WorkCategoryConteiner
