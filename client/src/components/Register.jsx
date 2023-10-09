import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/actions';
// import './CSS/register.css'
const Register = () => {
    const history=useNavigate()
    const [user, setuser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })

    let name, value;
    const handleinputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    // const dispatch=useDispatch()
    // const onFormSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(adduser(user));
    //     setuser('');
    // }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const {name,email,phone,password,cpassword}=user
            const res = await fetch("/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        name,email,phone,password,cpassword
                    }
                )
            });
            const data = await res.json();
            if(res.status===400 || !data){
                window.alert("Registration Failed..")
            }
            else{
                window.alert("User Registered Succesfully")
                history('/login')
            }
    }

    return (
        <Form className="my-4 container"  onSubmit={onFormSubmit}>
            <h1>Create Your Account !</h1>
            <Form.Group className=" my-4" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" id='name' value={user.name} onChange={handleinputs} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3 emaildiv">
            <Form.Label>Email</Form.Label>
               
              
                <Form.Control className='emailinput' type="email" name="email" id="email" value={user.email} onChange={handleinputs} placeholder="Email" />
    
               
              
                <Form.Control type="text" name="otp" id="otp" onChange={handleinputs} placeholder="OTP" />
                <button type="button"  class="btn btn-primary btn-sm">GET OTP</button>
               
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" name="phone" id="phone" value={user.phone} onChange={handleinputs} placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" id="password" value={user.password} onChange={handleinputs} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleinputs} placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type='submit' >
                Submit
            </Button>
            <NavLink className="lasttag" to="/login"> Already have Account..</NavLink>
        </Form>
    )
}

export default Register;