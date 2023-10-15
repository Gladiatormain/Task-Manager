import React, { useState } from 'react'
import './CSS/profile.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UpdateProfile } from '../redux/actions';
import { useDispatch } from "react-redux";
export default function Profile() {
    const dispatch = useDispatch();
    const history = useNavigate()
    // let url = "http://bootdey.com/img/Content/avatar/avatar1.png";
    let url = "https://images.search.yahoo.com/images/view;_ylt=Awr99PSUy9tjUpEMhIeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJkNTEyYWNhOTJmYzI5ODFiMjBkNGRmNzY0YzdjZmVjBGdwb3MDOARpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DAdmin%2BIcon%2BLogo%26type%3DE211US885G91646%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Ars-top%252Cct%253Abing%252Crgn%253Atop%252Cpos%253A2%26tab%3Dorganic%26ri%3D8&w=980&h=976&imgurl=cdn.onlinewebfonts.com%2Fsvg%2Fimg_208097.png&rurl=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F208097&size=27.9KB&p=Admin+Icon+Logo&oid=2d512aca92fc2981b20d4df764c7cfec&fr2=p%3As%2Cv%3Ai%2Cm%3Ars-top%2Cct%3Abing%2Crgn%3Atop%2Cpos%3A2&fr=mcafee&tt=Admin+Svg+Png+Icon+Free+Download+%28%23208097%29+-+OnlineWebFonts.COM&b=0&ni=160&no=8&ts=&tab=organic&sigr=15LBv6N5d6sj&sigb=MVIabcnP0cis&sigi=gxPq09bAALu3&sigt=IjEjkDhOjoLc&.crumb=MeFH.JzUHMC&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Ars-top%2Cct%3Abing%2Crgn%3Atop%2Cpos%3A2&type=E211US885G91646";
    const [update, updateuser] = useState({
        username: "",
        name: "",
        phone: "",
        dob: "",
        profileimg: "",
        email: ""
    })
    const handleimage = async (e) => {
        const file = e.target.files[0];
        const base64 = await ConvertToBase64(file)
        updateuser({ ...update, profileimg: base64 })
    }
    const handleinput = (e) => {
        console.log(update);
        updateuser({ ...update, [e.target.name]: e.target.value })
    }
    const submitted = async () => {
        // console.log(update);
        // dispatch(UpdateProfile(update))
        // history('/myprofile')
        try {
            const jwttoken = localStorage.getItem('jwttoken');
            const ress = await axios.post(`/updateprofile`, { update }, {
                headers: {
                    'token': jwttoken
                }
            })
            if (ress.status === 400) {
                window.alert("Failed to update")
            }
            else {
                window.alert("Updated in Succesfully")
                history('/myprofile')
            }
        } catch (error) {
           console.log(error);

        }

    }

    const ConvertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
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
    return (
        <div className="container-xl px-4 mt-4">
            <div className="row">
                <div className="col-xl-4">
                    {/* <!-- Profile picture card--> */}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            {/* <!-- Profile picture image--> */}
                            <img className="img-account-profile rounded-circle mb-2" src={update.profileimg} alt="" />
                            {/* <!-- Profile picture help block--> */}
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            {/* <!-- Profile picture upload button--> */}
                            <input type="file" name='myFile' onChange={handleimage} />
                        </div>
                    </div>

                </div>
                <div className="col-xl-8">
                    {/* <!-- Account details card--> */}
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form >
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputUsername">Username </label>
                                    <input name="username" className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={update.username} onChange={handleinput} />
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (first name)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputFirstName">First name</label>
                                        <input name='name' className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={update.name} onChange={handleinput} />
                                    </div>
                                    {/* <!-- Form Group (last name)--> */}

                                </div>
                                {/* <!-- Form Row        --> */}
                                {/* <!-- Form Group (email address)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={update.email} />
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (phone number)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputPhone">Phone number</label>
                                        <input name='phone' className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={update.phone} onChange={handleinput} />
                                    </div>
                                    {/* <!-- Form Group (birthday)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputBirthday">Birthday</label>
                                        <input name="dob" className="form-control" id="inputBirthday" type="text" placeholder="Enter your birthday" value={update.dob} onChange={handleinput} />
                                    </div>
                                </div>
                                {/* <!-- Save changes button--> */}
                                <button className="btn btn-primary" onClick={submitted} type="button">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
