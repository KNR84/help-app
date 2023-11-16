import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "./Alert";

//set up intial state and fetch all alerts from the API 
export const AlertList = () => {
    const [alerts, setAlerts] = useState([])


    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/alerts')
                .then(response => response.json())
                .then((alertArray) => {
                    // Filter alerts based on familyId
                    const filteredAlerts = alertArray.filter(alert => alert.familyId === helpAppUserObject.familyId);
                    setAlerts(filteredAlerts);
                });
        }, [helpAppUserObject.familyId]);


        return (
            <article className="alerts">
              
              
              <Link to="/addNewAlert"> 
                <button>Add Alert</button>
              </Link>


              
              {alerts.map(alert => (
                <Alert
                  key={`alert--${alert.id}`}
                  id={alert.id}
                  userId={alert.userId}
                  alertTypesId={alert.alertTypesId}
                  alertDateTime={alert.alertDateTime}
                  familyId={helpAppUserObject.familyId}
                />
              ))}
            </article>
          );
        };
