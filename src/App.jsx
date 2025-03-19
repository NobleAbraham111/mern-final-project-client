
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/ui/auth/Layout";
import AuthLogin from "./Pages/auth/Login";
import AuthRegister from "./Pages/auth/Register";
import { Button } from "./components/ui/button";
import AdminLayout from "./components/admin-view/layout";
import AdminDashBoard from "./Pages/admin-view/dashboard";
import AdminProducts from "./Pages/admin-view/products";
import AdminOrders from "./Pages/admin-view/orders";
import AdminFeatures from "./Pages/admin-view/features";
import ShoppingLayout from "./Pages/shopping-view/layout";
import NotFound from "./Pages/not-found";
import ShoppingListing from "./components/shopping-view/listing";
import ShoppingCheckOut from "./components/shopping-view/checkout";
import ShoppingAccount from "./components/shopping-view/account";
import ShoppingHome from "./components/shopping-view/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="flex flex-col overflow-hidden bg-black text-center text-2xl">
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

            <Route path="/shop" element={<ShoppingLayout/>}> 

            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="checkout" element={<ShoppingCheckOut/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>  
            
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </div>



    </>
  )
}

export default App;