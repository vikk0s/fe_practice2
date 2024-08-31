import React from 'react'
import Visa from './images/visa.png'
import MasterCard from './images/master.png'
import './CreditCard.css'

const CreditCard = (props) => {
    let img_path = ''

    switch (props.type) {
        case 'Visa':
            img_path = Visa
            break
        case 'Master Card':
            img_path = MasterCard
            break
        default:
            img_path = ''
            break
    }

    const number = props.number.slice(-4)
    let displayNumber = `.... .... .... ${number}`

    const bg_color = props.bgColor
    const txt_color = props.color

    return (
        <div style={{backgroundColor: bg_color, color: txt_color}} className='creditCard'>
            <div>
                <img src={img_path} alt="logo-picture" />
            </div>
            <div>
                <p className='cardNumber'>{displayNumber}</p>
            </div>
            <div className='container'>
                <p className="text">Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            </div>
            <div>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard