import { AdminView } from "./AdminView";



export const ApplicationViews = () => {
	
    //get the honeyUser out of storage login 
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser);

    if (honeyUserObject.admin) {
        // return admin views
        return <AdminView/>;
   } else {
        // return parent views
        return <NonAdminView />;     //add this module
    }
}
