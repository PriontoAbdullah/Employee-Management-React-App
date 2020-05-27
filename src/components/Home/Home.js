import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Employee from '../employee/Employee';
import Cart from '../Cart/Cart';

const Home = () => {

    const employeeList = fakeData.slice(0, 15);
    const [employees, setEmployees] = useState(employeeList);
    const [cart, setCart] = useState([]);

    const handleAddEmployee = (employee) => {
        const newCart = [...cart, employee];
        setCart(newCart);
    }

    return (
        <div className="row container-fluid">
            <div className="col-9">
                {
                    employees.map(employeeItem => <Employee
                        handleAddEmployee={handleAddEmployee}
                        employee={employeeItem}
                    >
                    </Employee>)
                }
            </div>
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Home;