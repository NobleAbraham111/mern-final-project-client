import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function checkAuth({isAuthenticated, user, children}) {
    const location = useLocation();


    console.log("isAuthenticated:", isAuthenticated);
console.log("user:", user);
console.log("location.pathname:", location.pathname);



    if (!isAuthenticated &&
        !(
            location.pathname.includes("/login") ||
            
            location.pathname.includes("/register")

        )) {
        return <Navigate to="/auth/login" />;

    }
    if (isAuthenticated &&

        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {
        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/shop/home" />;
        }

    }
    if (
        isAuthenticated && 
        user?.role !== 'admin' && 
        location.pathname.includes("admin")) {
        return <Navigate to="/unauth-page" />;

    }
    if (isAuthenticated && 
        user?.role === "admin" && 
        location.pathname.includes("shop")) {
        return <Navigate to="/admin/dashboard" />;
    }
    return <>{children}</>

    
}


export default checkAuth;
// This function checks if the user is authenticated and has the role of admin.