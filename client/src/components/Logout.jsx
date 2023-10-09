import React from "react";
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal } from "bootstrap";
const Logout = () => {
    const navigate = useNavigate();
    // const ress = await fetch("/logout", {
    //     method: "get",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    // });
    // const data = await res.json();
    // if(ress.status==200){
    navigate('/login')
    // }
    return (
        <>
        <h1>helo</h1>
        {/* <div>
            <Button> open modal</Button>
            <Modal show={false}>
                <Modal.Header>modal header</Modal.Header>
                <Modal.Body>hii</Modal.Body>
                <Modal.Footer>
                    <Button>
                        close modal
                    </Button>
                </Modal.Footer>
            </Modal>
            </div> */}
        </>
    )
}
export default Logout;