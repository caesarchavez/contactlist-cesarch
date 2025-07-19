import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import myphoto from "/src/assets/img/imgavatar.png"
import { Link } from "react-router-dom";
import { DeleteContact } from "./DeleteContact.jsx";

export const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const agendarUrl = "https://playground.4geeks.com/contact/agendas/cesarch";
    try {
      const response = await fetch(agendarUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container bg-light h-100 vh-100">
        <h1>People I know</h1>
        <div className="d-flex justify-content-end">
        <Link to="/ContactCreation">
        <button type="button" className="btn btn-success">Add New Contact</button>
        </Link>
        </div>
        <div className="row">
        {contacts.map((item) =>{
            return (
        <div className="card mx-auto my-2" style={{ width: "16rem" }} key={item.id}>
          <img src={myphoto} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title"> {item.name}</h5>
            <p className="card-text">
              {" "}
              <i className="fa-solid fa-phone"></i> {item.phone}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-envelope"></i> {item.email}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-location-dot"></i> {item.address}
            </p>
            <Link to={`/ContactUpdate/${item.id}`} state={item}>
            <button type="button" className="btn btn-warning mx-2">
              <i className="fa-solid fa-pencil"></i>
            </button>
            </Link>
            <button type="button" className="btn btn-danger" onClick={() => {
              setSelectedId(item.id)
              setShowModal(true)
            }}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
          )
        })}
      </div>
      <DeleteContact 
  contactId={selectedId}
  show={showModal}
  onClose={() => setShowModal(false)}
  onDeleteSuccess={() => getData()} 
  />
    </div>
  );
};
