import React from 'react'
import Card from '../Card/Card'
import { cardDetail } from '../../Data/CardData'
import "./CardsBody.css"

function CardsBody() {
    return (
        <div className='CardsBody'>
            <Card
                title={cardDetail.supervizor.title}
                paragraph={cardDetail.supervizor.paragraph}
                icon={cardDetail.supervizor.icon}
                color={cardDetail.supervizor.color}
            />
            <div>
                <Card
                    title={cardDetail.teambuilder.title}
                    paragraph={cardDetail.teambuilder.paragraph}
                    icon={cardDetail.teambuilder.icon}
                    color={cardDetail.teambuilder.color}
                />
                <Card
                    title={cardDetail.karma.title}
                    paragraph={cardDetail.karma.paragraph}
                    icon={cardDetail.karma.icon}
                    color={cardDetail.karma.color}
                />
            </div>
            <Card
                title={cardDetail.calculator.title}
                paragraph={cardDetail.calculator.paragraph}
                icon={cardDetail.calculator.icon}
                color={cardDetail.calculator.color}
            />
        </div>
    )
}

export default CardsBody
