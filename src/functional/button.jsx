import React from 'react'
import { Link } from 'react-router-dom'

const Button =(props)=> {

    return(
        <>
        <Link className='button' to='/questions'><a>{props.name}</a></Link>
        </>
    )
}

export default Button