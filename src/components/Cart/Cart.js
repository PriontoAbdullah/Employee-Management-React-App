import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMoneyCheckAlt, faHandHoldingUsd, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import './cart.css'

const Cart = (props) => {

    const cart = props.cart;
    const annualIncome = cart.reduce((totalIncome, employee) => totalIncome +
        employee.salary, 0);

    const bonus = (annualIncome / 25).toFixed(2)
    const total = (parseFloat(annualIncome) + parseFloat(bonus))

    return (
        <div className="cart sticky-top">
            <div>
                <h3 className="mt-3"> <span><FontAwesomeIcon icon={faAddressCard} /> </span>
            Total Employee: {cart.length}</h3>
                <h5 className="mt-3"><span><FontAwesomeIcon icon={faMoneyCheckAlt} /> </span>
            Annual Income: ${annualIncome}</h5>
                <p className="mt-3"><span><FontAwesomeIcon icon={faHandHoldingUsd} /> </span>
            TA - 10%  & DA - 15% : ${bonus}</p>
                <h4 className="mb-3"> <span><FontAwesomeIcon icon={faMoneyBillAlt} /> </span>
            Total Salary: {total}</h4>
            </div>
        </div>
    )
}

export default Cart;