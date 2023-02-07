import { useState } from "react";

const INITIAL_CONTACT_INFO = {
    first_name: "",
    last_name: "",
    email: "",
};

const FormContactInfo = (props) => {
    const [formData, setFormData] = useState(INITIAL_CONTACT_INFO );

    const handleChange = (e) => {
        console.log(`Target name: ${e.target.name} Target value: ${e.target.value} `);
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
    setFormData(newFormData);
};

    const handleNewContactSubmit = (e) => {
        console.log("press button")
        e.preventDefault();
        alert(`Thanks ${formData.first_name}: we'll send you more events soon.`)
        setFormData(INITIAL_CONTACT_INFO)
        props.addContactCallbackFunc(formData);
};
    return (
        <div>
                <form onSubmit={handleNewContactSubmit}>
                    <label htmlFor="first_name"></label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        placeholder="First name"
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="last_name"></label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        placeholder="Last name"
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                <input className="button" type="submit" value="Subscribe Newsletter:" />
            </form>
        </div>
    );
    };

export default FormContactInfo;
