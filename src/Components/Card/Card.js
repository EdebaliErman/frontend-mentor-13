import React from 'react'
import "./Card.css"

function Card({
    color,
    title,
    paragraph,
    icon
}) {
    return (
        <div className={color}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <svg className='w-12 h-12 bg-green-300 flex justify-end items-end'></svg>
        </div>
    )
}

export default Card
