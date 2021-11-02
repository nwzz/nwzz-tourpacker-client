import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OnlineConsult = () => {

    const handleSubmit = () =>{
        console.log('submit clicked');
    }

    const handleBlur = () =>{
        console.log('clicked');
    }


    return (
        <div className="d-grid justify-content-center mt-5 ">
            <div className="login-form shadow p-5 mb-5 bg-body rounded " style={{width: '550px',padding:'20px'}}>
            <Form onSubmit={handleSubmit} >
                <h5 className="">Register for Doctor Consult</h5><br />



                <Form.Group controlId="formGroupName" onBlur={handleBlur}>
                    <Form.Control type="name" name="name" placeholder="&#x10f0e0; Enter your Full Name" />
                </Form.Group> <br />

                <Form.Group controlId="formGroupEmail" onBlur={handleBlur}>
                    <Form.Control type="email" name="email" placeholder="&#x10f0e0; Doctor Name" />
                </Form.Group> <br />

                <Form.Group controlId="formGroupPhone" onBlur={handleBlur}>
                    <Form.Control type="phone" name="phone" placeholder="&#x10f0e0; Enter your Age" />
                </Form.Group> <br />

                <Form.Group controlId="formGroupPassword" onBlur={handleBlur}>
                    <Form.Control type="name" name="Visit Hour" className="form-icon" placeholder="&#xf30d; Enter Your Visiting Date & Hour" />
                </Form.Group> <br />
                <button className="btn btn-info justify-content-center">Register For Online Consult</button>
            </Form>
            </div>
        </div>
    );
};

export default OnlineConsult;