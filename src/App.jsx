
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/ui/auth/Layout";
import AuthLogin from "./Pages/auth/Login";
import AuthRegister from "./Pages/auth/Register";
import { Button } from "./components/ui/button";
import AdminLayout from "./components/ui/admin/Layout";
import AdminDashBoard from "./Pages/admin/Dashboard";
import AdminProducts from "./Pages/admin/Products";
import AdminOrders from "./Pages/admin/Orders";
import AdminFeatures from "./Pages/admin/Features"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="flex flex-col overflow-hidden bg-green text-center text-2xl">
        <h1 className="">Header Components</h1>
        
          <Routes>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<AuthLogin />} />
              <Route path="register" element={<AuthRegister />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashBoard/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
            <Route path="features" element={<AdminFeatures/>}/> 
            


            </Route>
          </Routes>
        
      </div>



    </>
  );
}

export default App;