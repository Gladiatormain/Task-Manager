import React from "react";
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginuser } from '../redux/actions';
import {useNavigate} from "react-router-dom"

const Login = ({isuserAuthenticated}) => {
    const history=useNavigate()
    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    let name, value;
    const handleinputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value })
    }
    // const dispatch=useDispatch()
    const onFormSubmit = async (e) => {
        const {email,password}=user
            e.preventDefault();
            const res = await fetch("/login", {
                method: "post",
                credentials:"include",
                withCredentials:true,
                headers: {
                    "Content-Type": "application/json",
                    "authorization":"token"
                },
                body: JSON.stringify(
                    {
                        email, password
                    }
                )
            });
            const data = await res.json();
            if(res.status===400 || !data){
                window.alert("Invalid Credentials")
            }
            else{
                console.log(data);
                window.alert("Logged in Succesfully")
                localStorage.setItem("jwttoken",data.token)
                isuserAuthenticated(true)
                history('/')
            }
    }


    return (
        <Form className="my-4 container" onSubmit={onFormSubmit}>
            <h1>Login To your Account !</h1>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" id="email" value={user.email} onChange={handleinputs} placeholder="Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" id="password" value={user.password} onChange={handleinputs} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type='submit' >
                Submit
            </Button>
            <NavLink className="lasttag" to="/register">Create new Account..</NavLink>
        </Form>
    )
}
export default Login;