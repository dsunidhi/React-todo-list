import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
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

    useEffect(() => {

        setLoanID(taskObj.ID)
        setLoanName(taskObj.Name)
        setUserList(taskObj.UserList)
        setTotalAmount(taskObj.TotalAmount)
        setCreditScore(taskObj.CreditScore)
        setLocation(taskObj.Location)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;