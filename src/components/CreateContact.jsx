import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";


export const CreateContact = () => {
const { store, dispatch } = useGlobalReducer();
const [fullname, setFullname] = useState("")
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")
const [address, setAddress] = useState("")

const pushData = async () => {
    const createContactUrl = "https://playground.4geeks.com/contact/agendas/cesarch/contacts"
    try{
        const response = await fetch(createContactUrl, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fullname, 
                phone: phone, 
                email: email, 
                address: address,
            }),
            })
            if (!response.ok){
                throw new error (`Error status is: ${error.status}`)
        }
            const data = await response.json()
            setFullname("");
            setEmail("");
            setPhone("");
            setAddress("");
    } catch(error){
        console.error("Error:", error.status)
    }
}

    return(
        <div className="container h-100 vh-100">
            <div className="input-group mb-3">
                <span className="input-group-text">Name</span>
                <input type="text" className="form-control" placeholder="Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Phone #</span>
                <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email @</span>
                <input type="text" className="form-control" placeholder="Email @" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Adress</span>
                <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button type="button" className="btn btn-success" onClick={pushData}>Save</button>
            <Link to ="/"> Or get back to contacts</Link>
        </div>
    )





}