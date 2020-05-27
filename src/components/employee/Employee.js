import React from 'react';
import './employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faGlobe, faMapMarkedAlt, faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Employee = (props) => {

    const { name, img, username, email, phone, website, salary, address } = props.employee;

    return (
        <div className="employee">
            <div className="image d-flex align-items-center">
                <img src={img} alt="" />
            </div>
            <div className="employee-list">
                <div class="d-flex justify-content-start">
                    <h4 className="name">{name}</h4>
                    <p> <span><FontAwesomeIcon icon={faUser} /></span> {username}</p>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <p className="space"> <span><FontAwesomeIcon icon={faEnvelope} /></span> {email}</p>
                    <p className="space"><span><FontAwesomeIcon icon={faPhoneAlt} /></span> {phone}</p>
                    <p className=""><span><FontAwesomeIcon icon={faGlobe} /></span> {website}</p>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <p class="lead space">Annual Salary: ${salary}</p>
                    <p className="space"><span><FontAwesomeIcon icon={faMapMarkedAlt} /></span> {address.street}, {address.city}</p>
                    <button className="btn btn-outline-dark"
                        onClick={() => props.handleAddEmployee(props.employee)}>
                        <FontAwesomeIcon icon={faUserPlus} /> Add Employee</button>
                </div>
            </div>
        </div>
    )
}

export default Employee;