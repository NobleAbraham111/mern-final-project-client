import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {

    email: '',
    password: '',
}

function AuthLogin() {


    const [formData, setFormData] = useState(initialState)

    function onSubmit() {
        console.log(formData);
        
    }





    return (

        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">

                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Sign in  to your Account
                </h1>

                <p className="mt-2 font-bold tracking-tight text-foreground">
                    don't have an account?{' '}
                    <Link className="font-medium ml-2 text-primary hover:underline"
                        to="/auth/register">register</Link> 
                        
                </p>
            </div>
            

            {/* 
                CommonForm Component:
                - formControls: An array of form control configurations (e.g., input fields, labels).
                - buttonText: The text to display on the form's submit button.
                - formData: The current state of the form data.
                - setFormData: A function to update the form data state.
                - onSubmit: A callback function triggered when the form is submitted.
                - className: Additional CSS classes for styling the form.
            */}
            <CommonForm
            formControls={loginFormControls} 
            buttonText={'sign up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}

            />
            
        </div>
    );
}

export default AuthLogin;