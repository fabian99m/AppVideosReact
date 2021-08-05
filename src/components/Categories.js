import React from 'react'

import './styles/Categories.css'

 const Categories = ({children,nombre}) => {
    return (
     <React.Fragment >
         <h1 className='categories'>{nombre}</h1>
         {children}
     </React.Fragment>
    )
}

export default Categories;