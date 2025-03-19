import { Outlet } from "react-router-dom";

function AuthLayout(){
    return(
        <div className="flex min-h-screen w-full">
            <div className="tems-center justify-center bg-black w-1/2 px-12 py-12">
                <div className="max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-4xl font-extrabold tracking-tight">Welcome to E-Commerce Shopping</h1>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-6 sm:px-12 lg:px-24">
                {/* Renders the child routes defined in the routing configuration */}
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;