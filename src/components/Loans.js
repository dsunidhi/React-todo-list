import React, {useEffect, useState} from 'react';
import CreateLoan from '../modals/CreateLoan'
import Card from './Card';

const Loans = () => {
    const [taskList, setTaskList] = useState([]);
    const [loanID, setLoanID] = useState(0);
    const [userList, setUserList] = useState([{}]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [creditScore, setCreditScore] = useState(0);
    const [location, setLocation] = useState(0);
    const [description, setDescription] = useState('')
    const [modal, setModal] = useState(false);

    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setUserList(taskList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Loans View</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Loan</button>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateLoan toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default Loans;