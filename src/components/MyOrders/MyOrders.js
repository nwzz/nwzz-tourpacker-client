import React, { useEffect, useState } from 'react';
import DashBoard from '../DashBoard/DashBoard';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://fierce-wave-16804.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
            console.log(data);
        })

    },[])



const handleDelete = (id) =>{

    const proceed = window.confirm('Are u sure to delete?');
        if(proceed){
            const url = `https://fierce-wave-16804.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted Successfully');
                const restOrders = orders.filter(user =>user._id !== id);
                setOrders(restOrders);
            }
        })
        }
}




    return (
        <div className=""><br />
            <DashBoard></DashBoard><br />
            <h3 style={{color:'darkblue'}}>List Of the Orders</h3><br /><br />
           {/* {
               orders.map(order =><p
               style={{border:'1px solid red'}}
               key={order._id}>{order.firstName} :: {order.email}

               </p>)
           } */}
          <div className="justify-content-center order-table" >
          {
               orders.map(order =><table style={{width:'50%'}}
               key={order._id} className="table-decor" >
                
                   <tr>
                       <td style={{width:'100px', height:'60px'}}>{order.firstName}</td>
                       <td style={{width:'200px'}}>{order.email}</td>
                       <td style={{width:'100px'}}>{order.address}</td>
                       <td style={{width:'100px'}}>{order.phone}</td>
                       {/* <td style={{width:'300px'}}>{order.reservationDate}</td> */}


                       {/* <td><button className="btn btn-warning">Update</button></td>
                       <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></td> */}
                   </tr>
               </table>)
           }
          </div><br /><br /><br /><br />
        </div>
    );
};

export default MyOrders;