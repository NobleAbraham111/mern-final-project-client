import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    userName: "",
    email: "",
    password: "",
}

function AuthRegister() {
    const [formData, setFormData] = useState(initialState);

    function onSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(formData); // Log the form data when the form is submitted
    }





    return (

        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">

                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Create a new account
                </h1>

                <p className="mt-2 font-bold tracking-tight text-foreground">
                    Already have an account?{' '}
                    <Link className="font-medium ml-2 text-primary hover:underline"
                        to="/auth/login">Sign in</Link> or{' '}
                    <Link className="font-medium ml-2 text-primary hover:underline"
                        to="/auth/login">Login</Link>.
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
            formControls={registerFormControls} 
            buttonText={'sign up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={() => console.log(formData)}
            className="space-y-4"
            />
            
        </div>
    );
}

export default AuthRegister;