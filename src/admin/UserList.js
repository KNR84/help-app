import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "./User";

//set up intial state and fetch all users from the API 
export const UserList = () => {
    const [users, setUsers] = useState([])

    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)

    useEffect(
        () => {
            fetch('http://localhost:8088/users')
                .then(response => response.json())
                .then((userArray) => {
                    // Filter users based on familyId
                    const filteredUsers = userArray.filter(user => user.familyId === helpAppUserObject.familyId);
                    setUsers(filteredUsers);
                });
        }, [helpAppUserObject.familyId]);


        return (
            <article className="users">
              
              <Link to="/addNewUser"> 
                <button>Add User</button>
              </Link>

                {users.map(user => (
                <User
                  key={`user--${user.id}`}
                  id={user.id}
                  userName={user.userName}
                  email={user.email}
                  familyId={helpAppUserObject.familyId}
                />
              ))}
            </article>
          );
        };










   