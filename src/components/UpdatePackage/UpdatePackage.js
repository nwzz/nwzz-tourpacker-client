import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import DashBoard from '../DashBoard/DashBoard';

const UpdatePackage = () => {

    const {id} = useParams();
    const history = useHistory();
    const [orders, setOrders] = useState({});

    useEffect(() =>{
        const url = `http://localhost:8000/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setOrders(data))
        console.log(orders);
    },[]);

    const handleUpdateName = e =>{ 
        const updateName = e.target.value;
        const updateUser = {firstName: updateName, email: orders.email };
        setOrders(updateUser);
     }

    const handleUpdateEmail = e  =>{
        const updateEmail = e.target.value;
        const updateUser = {name: orders.firstName, email: updateEmail };
        setOrders(updateUser);
    }

    const handleUpdate = e =>{
        const url = `http://localhost:8000/orders/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                setOrders({});
                history.push('/booking/manageOrders/');
            }
        })
        e.preventDefault();
    }




    return (
        <div><br />
            <DashBoard></DashBoard><br />
            <div>
            <h2>Update User <h4>{orders.firstName}</h4></h2>
            <p>{id}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleUpdateName} value={orders.firstName || ''} id="" />
                <input type="email" onChange={handleUpdateEmail} value={orders.email || ''} id="" />
                <input type="submit" value="Update" />
            </form>

        </div><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default UpdatePackage;