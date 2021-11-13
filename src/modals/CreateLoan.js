import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateLoanPopup = ({modal, toggle, save}) => {
    const [loanID, setLoanID] = useState();
    const [loanName, setLoanName] = useState('');
    const [userList, setUserList] = useState('');
    const [totalAmount, setTotalAmount] = useState();
    const [creditScore, setCreditScore] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "loanID"){
            setLoanID(value)
        }
        if(name === "loanName"){
            setLoanName(value)
        }
        if(name === "userList"){
            setUserList(value)
        }
        if(name === "totalAmount"){
            setTotalAmount(value)
        }
        if(name === "creditScore"){
            setCreditScore(value)
        }
        if(name === "location"){
            setLocation(value)
        }
        if(name === "description"){
            setDescription(value)
        }
        

    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["ID"] = loanID
        taskObj["Name"] = loanName
        taskObj["Users"] = userList
        taskObj["TotalAmount"] = totalAmount
        taskObj["CreditScore"] = creditScore
        taskObj["Location"] = location
        taskObj["Description"] = description
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Group Loan</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Loan ID</label>
                        <input type="text" className = "form-control" value = {loanID} onChange = {handleChange} name = "loanID"/>
                    </div>
                    <div className = "form-group">
                        <label>Loan Name</label>
                        <input type="text" className = "form-control" value = {loanName} onChange = {handleChange} name = "loanName"/>
                    </div>
                    <div className = "form-group">
                        <label>User List</label>
                        <input type="text"  className = "form-control" value = {userList} onChange = {handleChange} name = "userList"/>
                    </div>
                    <div className = "form-group">
                        <label>Total Amount</label>
                        <input type="text" className = "form-control" value = {totalAmount} onChange = {handleChange} name = "totalAmount"/>
                    </div>
                    <div className = "form-group">
                        <label>Credit Score</label>
                        <input type="text" className = "form-control" value = {creditScore} onChange = {handleChange} name = "creditScore"/>
                    </div>
                    <div className = "form-group">
                        <label>Location</label>
                        <input type="text" className = "form-control" value = {location} onChange = {handleChange} name = "location"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea className = "form-control" value = {description} onChange = {handleChange} name = "description"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateLoanPopup;