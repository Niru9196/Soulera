import React, { useState } from "react";

const formUserData = {
    type: "object",
    required: [
        "personalInfo",
        "contactInfo",
        "businessInfo",
        "operationalInfo",
    ],
    properties: {
        pre_registration_source: {
            title: "Event id",
            description:
                "The unique identifier for the event through which the user pre-registered.",
            type: "string",
        },
        personalInfo: {
            type: "object",
            title: "Personal Information",
            description: "Details about the individual representative",
            required: ["name"],
            properties: {
                name: {
                    title: "Full Name",
                    description:
                        "The full name of the individual or business representative.",
                    type: "string",
                },
            },
        },
        contactInfo: {
            type: "object",
            title: "Contact Information",
            description: "All contact details for communication",
            required: ["email", "phone_number", "preffered_mode_of_contact"],
            properties: {
                email: {
                    title: "Email",
                    description:
                        "The email address of the individual or business.",
                    type: "string",
                    format: "email",
                },
                phone_number: {
                    title: "Phone Number",
                    description:
                        "The primary phone number of the user, including the country code. (e.g., +91XXXXXXXXXX)",
                    type: "string",
                    pattern: "^\\+91[6-9]\\d{9}$",
                },
                is_phone_and_whatsapp_same: {
                    title: "Are Phone and WhatsApp Numbers the Same?",
                    description:
                        "Indicates whether the phone number is also used for WhatsApp.",
                    type: "boolean",
                    default: false,
                },
                whatsapp_number: {
                    title: "WhatsApp Number",
                    description:
                        "The contact number used for WhatsApp messaging, including the country code (e.g., +91XXXXXXXXXX).",
                    type: "string",
                    pattern: "^(\\+91[-\\s]?)?[6-9]\\d{9}$",
                },
                preffered_mode_of_contact: {
                    type: "string",
                    title: "Contact Preference",
                    description:
                        "The preferred communication channel for the user (e.g., Email, Phone, WhatsApp).",
                    enum: ["EMAIL", "PHONE", "WHATSAPP"],
                    enumNames: ["Email", "Phone", "WhatsApp"],
                },
            },
        },
        businessInfo: {
            type: "object",
            title: "Business Information",
            description: "Details about the business entity",
            required: ["brand", "website", "type_of_business", "category"],
            properties: {
                brand: {
                    title: "Brand",
                    description:
                        "The name of the brand or business represented.",
                    type: "string",
                },
                website: {
                    title: "Website Link",
                    description:
                        "The official website URL of the business or brand.",
                    type: "string",
                    format: "uri",
                },
                type_of_business: {
                    type: "string",
                    description:
                        "The legal structure of the business (e.g., Sole Proprietorship, LLP).",
                    title: "Type of Business",
                    enum: [
                        "SOLE_PROPRIETORSHIP",
                        "PARTNERSHIP",
                        "LLP",
                        "PVT_LTD",
                    ],
                    enumNames: [
                        "Sole Proprietorship",
                        "Partnership",
                        "LLP",
                        "Private Ltd.",
                    ],
                },
            },
        },
    },
};

const typeOfData = {
    'object': {},
    'string': '',
}

const Form = () => {
    const [userFormData, setUserFormData] = useState({});

    const handleAddInputData = (e, type) => {
        const stringdata = {[e.target.name]: e.target.value}
        const requiredFormatAnswer = (type === 'object' ? {[e.target.name]: e.target.value} : stringdata);
        setUserFormData((prev) => ({...prev, requiredFormatAnswer}))
    }

    console.log(Object.entries(formUserData.properties));
    return (
        <div style={{padding: '10px 20px'}}>
            {formUserData.type === "object"}{" "}
            <div >
                {Object.entries(formUserData.properties)?.map((item, index) => (
                    <div key={index}>
                        <p>{item[0]}<span>{formUserData?.required.includes(item[0]) && '*'}</span></p>
                        <br />
                        <p>{item[1].title}</p>
                        <div>
                            {item[1]?.properties &&
                                Object.entries(item[1]?.properties).map(
                                    (item1, index1) => (
                                        <>
                                            <div key={index1}>
                                                <p>{item1[0]}</p>
                                                <div>
                                                    <p>{item1[1].title}</p>
                                                    {/* <p>
                                                        {item1[1].description}
                                                    </p> */}
                                                     {item1[1].enumNames ? (
                                                        <>
                                                        <select onChange={(e) =>handleAddInputData(e, item1[1].type) }>
                                                            {item1[1].enumNames?.map((item2, index2) => (
                                                                <option key={item2} >{item2}</option>
                                                            ))}
                                                        </select>
                                                        </>

                                                     )  : (
                                                        <input
                                                        style={{border: '2px solid black'}}
                                                        type="text"
                                                        placeholder={
                                                            item1[1].title
                                                        }

                                                        onChange={(e) => handleAddInputData(e, item1[1].type)}
                                                    />
                                                     )}
                                                </div>
                                            </div>
                                        </>
                                    )
                                )}
                        </div>
                    </div>
                ))}
            </div>

            <button style={{border: '2px solid black'}} >Submit</button>
        </div>
    );
};

export default Form;
