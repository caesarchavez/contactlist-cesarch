import { Link, useLocation } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";


export const ContactEdit = () => {
const { store, dispatch } = useGlobalReducer();
const {state} = useLocation()
const [updatedname, setUpdatedName] = useState("")
const [updatedphone, setUpdatedPhone] = useState("")
const [updatedemail, setUpdatedEmail] = useState("")
const [updatedaddress, setUpdatedAddress] = useState("")

useEffect(() => {
    if (state){
        setUpdatedName(state.name)
        setUpdatedPhone(state.phone)
        setUpdatedEmail(state.email)
        setUpdatedAddress(state.address)
    }
}, [state])

const updateContact = async () => {
    try {
        const updateUrl = `https://playground.4geeks.com/contact/agendas/cesarch/contacts/${state.id}`
        const response = await fetch(updateUrl, {
            method: "PUT", 
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: updatedname,
                phone: updatedphone,
                email: updatedemail,
                address: updatedaddress,
            })
        })
        const data = await response.json()
            setUpdatedName("");
            setUpdatedEmail("");
            setUpdatedPhone("");
            setUpdatedAddress("");
    }catch(error){
    console.error("Error status:",error.message)
}
 }
 return(
        <div className="container h-100 vh-100">
            <div className="input-group mb-3">
                <span className="input-group-text">Name</span>
                <input type="text" className="form-control" placeholder="Name" value={updatedname} onChange={(e) => setUpdatedName(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Phone</span>
                <input type="text" className="form-control" placeholder="Phone" value={updatedphone} onChange={(e) => setUpdatedPhone(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email </span>
                <input type="text" className="form-control" placeholder="Email @" value={updatedemail} onChange={(e) => setUpdatedEmail(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Address</span>
                <input type="text" className="form-control" placeholder="Address" value={updatedaddress} onChange={(e) => setUpdatedAddress(e.target.value)} />
            </div>
            <Link to="/">
            <button type="button" className="btn btn-success" onClick={updateContact}>Save</button>
            </Link>
            <Link to ="/"> Or get back to contacts</Link>
        </div>
    )







}