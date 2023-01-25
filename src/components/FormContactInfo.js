import { useState } from "react";

const INITIAL_CONTACT_INFO = {
    first_name: "",
    last_name: "",
    email: "",
};

const NewContactForm = (props) => {
    const [formData, setFormData] = useState(INITIAL_CONTACT_INFO );
    const [formErrors, setFormErrors] = useState({});
    const [emptyBox, setEmptyBox] = useState(true)
    // const [withName, setwithName] = useState(true);
    // const [withLastName, setwithLastName] = useState(true);
    // const [withEmail, setwithEmail] = useState(true);

    const handleChange = (e) => {
    const newFormData = {
        ...formData,
        [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
};

    const handleNewContactSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formData));
};

    const validateForm = (values) => {
        const errors = {};

        if(formData.length === 0) {
            errors.first_name = "Por favor llene todas las casillas";
            errors.last_name = "Por favor llene todas las casillas";
            errors.email = "Por favor llene todas las casillas";
            setEmptyBox(false);

    
        // if (formData.first_name.length === 0 && formData.first_name.length === 0 && formData.email.length === 0) {
        // errors.first_name = "Please, type your First Name";
        // errors.last_name = "Please, type your Last Name";
        // errors.email = "Please, type your email address";
        // setwithName(false);
        // setwithLastName(false);
        // setwithEmail(false);

        // } else if (formData.first_name.length === 0) {
        // errors.title = "Please, type your First Name";
        // setwithName(false);
        // setwithLastName(true);
        // setwithEmail(true);

        // } else if (formData.owner.length === 0) {
        // errors.owner = "Board must have owner";
        // setIsTitleValid(true);
        // setIsOwnerValid(false);
        } else {
        props.addBoardCallbackFunc(formData);
        setFormData(INITIAL_CONTACT_INFO);
        setEmptyBox(true);
        
        // setIsTitleValid(true);
        // setIsOwnerValid(true);
        }
    return errors;
};

    const [show, setShow] = useState(false);

    return (
        <div>
            {/* {show ? ( */}
                <input className="button" type="submit" value="Newsletter Form:" />
                <form onSubmit={handleNewContactSubmit}>
                <label htmlFor="first_name"></label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    placeholder="First name"
                    onChange={handleChange}
                    className={emptyBox ? "valid" : "invalid"}
                />
                
                <label htmlFor="last_name"></label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    placeholder="Last name"
                    onChange={handleChange}
                    className={emptyBox ? "valid" : "invalid"}
                />
                
                <label htmlFor="email"></label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className={emptyBox ? "valid" : "invalid"}
                />
                {/* <p className="formError">{formErrors.title}</p>
                <p className="formError">{formErrors.owner}</p> */}

                <br />
                

                {/* <p>
                    {" "}
                    <label>Preview Board:</label>
                    <br />
                    {formData.title} - {formData.owner}{" "}
                </p> */}

                {/* <button className="button" onClick={() => setShow(false)}>
                    {" "}
                    Hide New Board Form{" "}
                </button>
                </form>
            ) : (
                <button className="button" onClick={() => setShow(true)}>
                {" "}
                Create New Board{" "}
                </button>
            )
            } */}

            </form>;
        </div>
    );
    };

export default NewContactForm;
