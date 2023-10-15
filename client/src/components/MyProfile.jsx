import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function MyProfile() {
    const history = useNavigate()
    
    const [update, updateuser] = useState({
        username: "",
        name: "",
        phone: "",
        dob: "",
        profileimg:"",
        email: ""
    })
    useEffect(() => {
        const fetchData = async () => {
            const jwttoken = localStorage.getItem('jwttoken');
            const data = await axios.get('/myprofile', {
                headers: {
                    'token': jwttoken
                }
            });
            const { email, name, phone, profileimg, username,dob } = data.data.userexist
            updateuser({
                email, name, phone, profileimg, username,dob
            })
        }
        fetchData();
    }, []);
    const submitted = () => {
        history('/profile')
    }
    return (
        <div className="container-xl px-4 mt-4">
            <div className="row">
                <div className="col-xl-4">
                    {/* <!-- Profile picture card--> */}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            {/* <!-- Profile picture image--> */}
                            <img className="img-account-profile rounded-circle mb-2" alt="" src={update.profileimg} />
                            {/* <!-- Profile picture help block--> */}
                        </div>
                    </div>ss
                </div>
                <div className="col-xl-8">
                    {/* <!-- Account details card--> */}
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form >
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputUsername">Username : <b>{update.username}</b> </label>
                                    {/* <input name="username" className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={update.username} />
                                    <p>Aakash</p> */}
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (first name)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputFirstName">Name     : <b>{update.name}</b></label>
                                        {/* <input name='name' className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={update.name} /> */}
                                    </div>
                                    {/* <!-- Form Group (last name)--> */}

                                </div>
                                {/* <!-- Form Row        --> */}
                                {/* <!-- Form Group (email address)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputEmailAddress">Email    : <b>{update.email}</b></label>
                                    {/* <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={update.email} /> */}
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (phone number)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputPhone">Contact  : <b>{update.phone}</b></label>
                                        {/* <input name='phone' className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={update.phone} /> */}
                                    </div>
                                    {/* <!-- Form Group (birthday)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputBirthday">Birthday : <b>{update.dob}</b></label>
                                       
                                    </div>
                                </div>
                                {/* <!-- Save changes button--> */}
                                <button className="btn btn-primary" onClick={submitted} type="button">Update Profile</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
