import React from 'react';
import { Form } from "react-router-dom";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";


const types = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
    BUTTON:"Button",
};


function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
    function renderInputByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem.name] || '';

        switch (getControlItem.renderInputByComponentType) {
            case types.INPUT:
                element = (
                    <input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })
                        }
                    />
                );
                break;


            case "select":
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [getControlItem.name]: value
                    })}
                        value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {getControlItem.options && getControlItem.options.length > 0
                                ? getControlItem.options.map((optionItem) => (
                                    <SelectItem key={optionItem.id} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                ))
                                : null}
                        </SelectContent>
                    </Select>
                );


                break;
            case "textarea":
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value
                            })
                        }

                    />
                );
                break;


            default:
                element = (
                    <input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}

                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })
                        }
                    />
                );
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name} >
                        <label className="mb-1" >{controlItem.label}</label>
                        {
                            renderInputByComponentType(controlItem)
                        }


                    </div>

                    )}

            </div>
            <button type="submit" className='mt-2 w-full' >
                {buttonText || 'submit'}
                </button>
        </form>

    );

}

export default CommonForm;