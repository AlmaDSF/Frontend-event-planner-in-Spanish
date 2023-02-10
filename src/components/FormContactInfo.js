import { useState } from "react";

const INITIAL_CONTACT_INFO = {
  first_name: "",
  last_name: "",
  email: "",
};

const FormContactInfo = (props) => {
  const [formData, setFormData] = useState(INITIAL_CONTACT_INFO);

  const [formErrors, setFormErrors] = useState("");
  const [isDataValid, setIsDataValid] = useState(true);

  const handleChange = (e) => {
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value} `
    );
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewContactSubmit = (e) => {
    console.log("press button");
    e.preventDefault();
    setFormErrors(validateData(formData));
  };

  const validateData = (values) => {
    let errors = "";
  
    if (formData.email.length === 0 || formData.first_name.length === 0 || formData.last_name.length === 0) {
      errors = "Por favor ingresa toda la informacion";

    } else {
      alert(`Gracias ${formData.first_name}: te enviaremos más eventos pronto.`);
      setFormData(INITIAL_CONTACT_INFO);
      props.addContactCallbackFunc(formData);
      setIsDataValid(true)
    }
    return(errors)
  


  }
  return (
    <div>
      <form onSubmit={handleNewContactSubmit}>
        <label htmlFor="first_name"></label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          placeholder="Nombre"
          onChange={handleChange}
        />

        <label htmlFor="last_name"></label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          placeholder="Apellido"
          onChange={handleChange}
        />

        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
        <input className="button" type="submit" value="Suscribase aqui" />
        <p className="error-data"> {formErrors} </p>
  
      </form>
    </div>
  );
};

export default FormContactInfo;
