//need to add isChild to database so that is an option for the view.




export const ApplicationViews = () => {
	
    //get the honeyUser out of storage login 
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)      

    if (honeyUserObject.admin) {          //admin is a property of the honey user object indicated by the honey_user.staff
           //return admin views
           return <AdminView />
    }
    else {
        //return parent views
        return <ParentView />
    }
    
}