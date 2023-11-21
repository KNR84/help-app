import "./NavBar.css"

import { AdminNav } from "./AdminNav";
import { NonAdminNav } from "./NonAdminNav";

//on line 13 the logout link is built. Line 15 has a custom onClick. Removing the item from local storage the item called honey_user then redirecting the user back to the baseroute of the application. 
export const NavBar = () => {
    
  //get the honeyUser out of storage login 
  const localHoneyUser = localStorage.getItem("helpApp_user")
  const honeyUserObject = JSON.parse(localHoneyUser)      

  if (honeyUserObject.admin) {
    // return admin views
    return <AdminNav/>;
} 
else {
    // return parent views
    return <NonAdminNav/>;     //add this module
}
}
