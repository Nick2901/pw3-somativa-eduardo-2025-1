import React from 'react'

import style from './ContainerBook.module.css'

const ContainerBook = (props) => {
    return (
        <div className={style.container_book}>
            {props.children}
        </div>
    )
}

export default ContainerBook