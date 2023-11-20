import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AlertList } from "./AlertList"
import danger from '../Images/danger.png';
import medicalEm from '../Images/medicalEm.png';
import homework from '../Images/homework.png';
import needRide from '../Images/needRide.png';
import onMyWay from '../Images/onMyWay.png';
import call from '../Images/call.png';
import ok from '../Images/ok.png';




export const AddNewAlert = (props) => {

  //creates the variable user with initial state objects userName, email, password, isAdmin and familyId.
  const localhelpAppUser = localStorage.getItem("helpApp_user")
  const helpAppUserObject = JSON.parse(localhelpAppUser)

  //allows page to navigate elsewhere
  let navigate = useNavigate()

  const [alertTypes, setAlertTypes] = useState([])


  const [alert, setAlert] = useState({
    userId: helpAppUserObject.id,
    alertTypesId: 0,
    alertDateTime: new Date(),
    familyId: helpAppUserObject.familyId,
    userName: helpAppUserObject.userName,
  })

  useEffect(
    () => {
      fetch('http://localhost:8088/alertTypes')
        .then(response => response.json())
        .then((alertTypesArray) => {
          setAlertTypes(alertTypesArray)
        })
    },
    []
  )
  //processes and posts the data to the database
  const addNewAlert = () => {
    return fetch("http://localhost:8088/alerts?_expand=user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(alert)
    })
      .then(res => res.json())

}






  const addAlertType = (event) => {
    const newAlertObject = {
      userId: helpAppUserObject.id,
      alertTypesId: +event.target.value,
      alertDateTime: new Date(),
      familyId: helpAppUserObject.familyId,
      userName: helpAppUserObject.userName,
      alertText: helpAppUserObject.alertText
    }
    setAlert(newAlertObject)

  }


  //function updates the user state as the user types in the form fields. It creates a copy of the current state - modidifies it with the new information inputed by the user and then sets the state with the updated copy. 
  const updateAlert = (evt) => {
    const copy = { ...alert }
    copy[evt.target.id] = evt.target.value
    setAlert(copy)


  }

  const handleButtonClick = (alertTypeId) => {
    setAlert((prevAlert) => ({
      ...prevAlert,
      alertTypesId: alertTypeId,
    }));
  };


  const clickDanger = () => {
    handleButtonClick(1); // Assuming 1 is the alertTypeId for "Danger"
    <h1>I am in Danger</h1>
    console.log("Button danger clicked!");

  };

  const clickMedicalEm = () => {
    handleButtonClick(2); // Assuming 2 is the alertTypeId for "Medical Emergency"
    console.log("Button medical clicked!");
  };

  const clickHomework = () => {
    handleButtonClick(3); // Assuming 3 is the alertTypeId for "Homework"
    console.log("Button homework clicked!");
  };

  const clickNeedRide = () => {
    handleButtonClick(4); // Assuming 4 is the alertTypeId for "Need a Ride"
    console.log("Button need ride clicked!");
  };
  const clickOnMyWay = () => {
    handleButtonClick(5); // Assuming 6 is the alertTypeId for "on my way"
    console.log("Button call me clicked!");
  };
const clickCall = () => {
    handleButtonClick(6); // Assuming 5 is the alertTypeId for "call"
    console.log("Button call me clicked!");
  };
const clickOk = () => {
    handleButtonClick(7); // Assuming 5 is the alertTypeId for "ok"
    console.log("Button call me clicked!");
  };


 

//this is the render method of the component. It returns the JSX that represents the form with input fields for new alerts.
  return (
    <form className="messageForm">
      <h2 className="messageForm__title">Click a button to send a message</h2>

      <fieldset>
        <br></br>
        <button onClick={clickDanger} className="alert-buttons">
          <img src={danger} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickMedicalEm} className="alert-buttons">
          <img src={medicalEm} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickHomework} className="alert-buttons">
          <img src={homework} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickNeedRide} className="alert-buttons">
          <img src={needRide} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickOnMyWay} className="alert-buttons">
          <img src={call} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickCall} className="alert-buttons">
          <img src={onMyWay} alt="My Logo" className="logo" />
        </button>

        <button onClick={clickOk} className="alert-buttons">
          <img src={ok} alt="My Logo" className="logo" />
        </button>
      </fieldset>

      <h2>or select from the menu</h2>

      <div className="messageForm">
        <select className="custom-dropdown" onChange={addAlertType} name="alertTypes" id="alertTypes">
          <option value="0">Select an alert</option>
          {alertTypes.map((aType) => (
            <option key={aType.id} value={aType.id}>
              {aType.alertText}

            </option>

          ))}
        </select>
      </div>

      <fieldset>
        <button onClick={addNewAlert} type="submit">
          Submit
        </button>
      </fieldset>

      <div className="chat-area">
        <br></br>
        <AlertList />
      </div>
    </form>
  );

}