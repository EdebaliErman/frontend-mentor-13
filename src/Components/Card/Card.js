import React from 'react'
import "./Card.css"

function Card({
    color,
    title,
    paragraph,
    icon
}) {
    return (
        <div className={color + " Card"}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div className='svg-pozition'>
                {icon}
            </div>
        </div>
    )
}

export default Card
