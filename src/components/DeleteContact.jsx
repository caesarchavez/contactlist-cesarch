import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const DeleteContact = ({contactId, show, onClose, onDeleteSuccess}) => {
const { store, dispatch } = useGlobalReducer()
if(!show) return null


const deleteData = async () => {
    const deleteUrl = `https://playground.4geeks.com/contact/agendas/cesarch/contacts/${contactId}`
    try{
        const response = await fetch(deleteUrl,{
            method: "DELETE"
        })
        if (!response.ok){
            throw new Error("Failed to Delete")
        }
        onClose()
        if (onDeleteSuccess) onDeleteSuccess()
    } catch(error){
        console.error("Error Status:", error.message)
    }
} 

return(
    <div className="modal d-block" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Warning</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="modal-body">
        <p>Delete Contact?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
        <button type="button" className="btn btn-danger" onClick={deleteData}>Delete</button>
      </div>
    </div>
  </div>
</div>
)








}